<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;





Route::middleware(('auth:sanctum'))->group(function(){
    Route::get('/users',[userController::class,'index']);
});
Route::post('/register',[AuthController::class,'Register']);
Route::post('/login',[AuthController::class,'Login']);
