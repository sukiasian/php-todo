<?php

namespace App\Http\Services;

use App\Models\Task;
use Exception;
use Illuminate\Database\Eloquent\Collection;

class TaskService { 
	public static function createTask(array $input): Task {
		$task = Task::create(
			[
				'title' => $input['title'],  
				'description' => isset($input['description']) ? $input['description'] : ''
			]);

		return $task;
	}

	public static function getTaskById(string $id): Task {
		return Task::find($id);
	}

	// to ensure the returned array contains Task objects PHPDoc is used
	public static function getAllTasks(): Collection {
		return Task::all();
	}

	public static function deleteTaskById(string $id): string { 
		$task = Task::find($id);
		
		if (!$task) { 
			throw new Exception('Task is not found');
		}
		
		$taskTitle = $task->title;

		$task->delete();

		return $taskTitle;
	}

	public static function markAsFinished(string $id): Task { 
		$task = Task::find($id);

		if (!$task) { 
			throw new Exception('Task is not found');
		}

		$task->done = true;
		
		$task->save();

		return $task;	
	}
}