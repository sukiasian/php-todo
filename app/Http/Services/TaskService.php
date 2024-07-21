<?php

namespace App\Http\Services;

use App\Models\Task;

class TaskService { 
	public static function createTask(array $input) {
		$task = Task::create(['title' => $input['title']]);

		return $task;
	}

	public static function getTaskById(string $id) {
		$task = Task::find($id);

		return $task;
	}
}