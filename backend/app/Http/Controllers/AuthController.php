<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class AuthController extends Controller
{
    public function Register(Request $request)
    {
        //
        $isValidated = Validator::make($request->all(), [
            'name' => 'required|unique:users',
            'email' => 'required|unique:users|email',
            'password' => 'required|confirmed|min:8',
        ]);
        if ($isValidated->fails()) {
            return response()->json(['errors' => $isValidated->errors()], 422);
        }
        $validatedData = $isValidated->validated();
        $users = new User();
        $users->name = $validatedData['name'];
        $users->email = $validatedData['email'];
        $users->password = Hash::make($validatedData['password']);
        $users->save();
        return response()->json(['success' => 'You have successfully registered'], 201);
    }
    public function Login(Request $request)
    {
        $isValidatedData = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);
        if ($isValidatedData->fails()) {
            return response()->json(['error' => $isValidatedData->errors()], 422);
        };
        $password = $isValidatedData['password'];
        $email = $isValidatedData['email'];
        $user = User::where('email', $email);
        if (!$user) {
            return response()->json(['error' => 'This Email Does not Exist '], 404);
        } else {
            if (Hash::check($password, $user->password)) {
                return response()->json(['error' => 'Invalid credentials'], 401);
            } else {
                $userToken = $user->createToken('auth_token')->plainTextToken;
                return response()->json([
                    'message' => 'Login successful',
                    'user' => [
                        'name' => $user->name,
                    ],
                    'token' => $userToken,
                ]);
            }
        }
    }
}
