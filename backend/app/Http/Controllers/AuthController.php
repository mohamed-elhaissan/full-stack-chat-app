<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function Register(Request $request){
//
        $isValidated = Validator::make($request->all(),[
            'name' => 'required|unique:users',
            'email' => 'required|unique:users|email',
            'password' => 'required|confirmed|min:8',
        ]);
        if($isValidated->fails()){
            return response()->json(['errors' => $isValidated->errors()],422);
        }
        $validatedData = $isValidated->validated();
        $users = new User();
        $users->name = $validatedData['name'];
        $users->email = $validatedData['email'];
        $users->password = Hash::make($validatedData['password']);
        $users->save();
        return response()->json(['success' => 'You have successfully registered'],201);
    }
}
