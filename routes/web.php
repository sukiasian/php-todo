<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

# Tasks routes
Route::post('/api/tasks', [TaskController::class, 'createTask']);
Route::get('/api/tasks', [TaskController::class, 'getAllTasks']);
Route::get('/api/tasks/{id}', [TaskController::class, 'getTaskById']);
Route::delete('/api/tasks/{id}', [TaskController::class, 'deleteTaskById']);
Route::patch('/api/tasks/{id}', [TaskController::class, 'markAsFinished']);

