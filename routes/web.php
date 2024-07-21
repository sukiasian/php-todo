<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

# Tasks
Route::post('/tasks', [TaskController::class, 'createTask']);
Route::get('/tasks/{id}', [TaskController::class, 'createTask']);

