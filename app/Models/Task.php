<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model {
    use HasFactory;

	protected $table = 'tasks';
	protected $fillable = ['title', 'description', 'done'];

	public static $rules = [
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
        'done' => 'nullable|boolean'
    ];
} 