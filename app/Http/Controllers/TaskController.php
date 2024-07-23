<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Routing\Controller;
use App\Http\Services\TaskService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TaskController extends Controller { 
	# Add try catch and handlers 
	public function createTask(Request $request): JsonResponse { 
		$input = $request->json()->all();
		try { 

			$task = TaskService::createTask($input);
			
			// NOTE: return needs to be used -  By using return in a controller method, we pass the response object back to Laravel’s HTTP kernel.
			return response()->json(
				[
					'data' => $task
				], 
				201
			);
 		} catch(Exception $e) { 
			return response()->json(
				[
					'message' => "{$e->getMessage()}"
				], 
				403
			);
		}
	}

	public function getTaskById(string $id): JsonResponse {
		$task = TaskService::getTaskById($id);

		if (!$task) { 
			response()->json(
				[
					'message' => 'Task is not found.'
				], 
				404
			);
		}
		
		return response()->json(
			[
				'data' => $task
			],
			200
		);
	}

	public function getAllTasks(): JsonResponse { 
		$tasks = TaskService::getAllTasks();

		if (count($tasks) == 0) { 
			response()->json(
				[
					'message' => 'There are no tasks yet. Create one!'
				],
				404
			);
		}

		return response()->json(
			[
				'data' => $tasks
			],
			200
		);
	}

	// TODO create an automatic handler to automate responses and error handling 
	public function deleteTaskById(string $id): JsonResponse {
		echo $id;
		try { 
			$taskTitle = TaskService::deleteTaskById($id);	

			return response()->json(
				[
					'message' => "Task {$taskTitle} is deleted."
				],
				200
			);
		} catch (Exception $e) { 
			return response()->json(
				[
					'message' => $e->getMessage()
				], 
				// TODO create a custom error class to contain error code
				403
			);
		}
	}

	public function markAsFinished(string $id): JsonResponse { 
		try { 
			$taskUpdated = TaskService::markAsFinished($id);	

			return response()->json(
				[
					'message' => "Task {$taskUpdated->title} is updated."
				],
				200
			);
		} catch (Exception $e) {
			return response()->json(
				[
					'message' => $e->getMessage()
				], 
				403
			);
		}

	}
}