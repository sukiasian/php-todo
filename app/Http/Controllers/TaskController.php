<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use App\Http\Services\TaskService;

	
class TaskController extends Controller { 
	public function createTask() { 
		$input = file_get_contents('php://input');

		// ['description' => $description, 'title' => $title] = json_decode($input, true);
		$data = json_decode($input, true);

		$task = TaskService::createTask($data);
		
		echo $task; 
	}
}