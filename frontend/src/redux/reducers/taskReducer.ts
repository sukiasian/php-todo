import { type AnyAction } from 'redux';
import { ReduxTaskAction } from '../../types/enums';
import { ServerResponse } from '../../types/interfaces';

export interface CreateTaskData { 
	title?: string; 
	description?: string;
}

export interface TaskState {
	createTaskData?: CreateTaskData;
	createTaskSuccessResponse?: ServerResponse;
	createTaskFailureResponse?: ServerResponse;

	getAllTasksSuccessResponse?: ServerResponse;
	getAllTasksFailureResponse?: ServerResponse;

	deleteTaskSuccessResponse?: ServerResponse;
	deleteTaskFailureResponse?: ServerResponse;

	markTaskFinishedSuccessResponse?: ServerResponse;
	markTaskFinishedFailureResponse?: ServerResponse;
}

const initialState: TaskState = {};

export const taskReducer = (state = initialState, action: AnyAction): TaskState => {
    switch (action.type) {
        case ReduxTaskAction.SET_CREATE_TASK_DATA:
            return {
                ...state,
                createTaskData: action.payload
            };

        case ReduxTaskAction.SET_CREATE_TASK_SUCCESS_RESPONSE:
            return {
                ...state,
                createTaskSuccessResponse: action.payload
            };

        case ReduxTaskAction.SET_CREATE_TASK_FAILURE_RESPONSE:
            return {
                ...state,
                createTaskFailureResponse: action.payload
            };

        case ReduxTaskAction.SET_GET_ALL_TASKS_SUCCESS_RESPONSE:
            return {
                ...state,
                getAllTasksSuccessResponse: action.payload
            };

        case ReduxTaskAction.SET_GET_ALL_TASKS_FAILURE_RESPONSE:
            return {
                ...state,
                getAllTasksFailureResponse: action.payload
            };

        case ReduxTaskAction.SET_DELETE_TASK_SUCCESS_RESPONSE:
            return {
                ...state,
                deleteTaskSuccessResponse: action.payload
            };

        case ReduxTaskAction.SET_DELETE_TASK_FAILURE_RESPONSE:
            return {
                ...state,
                deleteTaskFailureResponse: action.payload
            };

		case ReduxTaskAction.SET_MAKE_TASK_FINISHED_SUCCESS_RESPONSE: 
			return { 
				...state, 
				markTaskFinishedSuccessResponse: action.payload
			}
	
		case ReduxTaskAction.SET_MAKE_TASK_FINISHED_SUCCESS_RESPONSE: 
			return { 
				...state, 
				markTaskFinishedFailureResponse: action.payload
			}
	
			
        default:
            return state;
    }
};
