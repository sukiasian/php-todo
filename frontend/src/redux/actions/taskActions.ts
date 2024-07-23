import { type AnyAction } from 'redux';
import { ReduxTaskAction, SagaTask } from '../../types/enums';
import { CreateTaskData } from '../reducers/taskReducer';

export const setCreateTaskDataAction = (payload: CreateTaskData): AnyAction => {
    return {
        type: ReduxTaskAction.SET_CREATE_TASK_DATA,
        payload
    };
};
export const createTaskAction = (payload: CreateTaskData): AnyAction => {
	return {
		type: SagaTask.CREATE_TASK, 
		payload 
	}
};
export const setCreateTaskSuccessResponseAction = (payload: any): AnyAction => { 
	return {
		type: ReduxTaskAction.SET_CREATE_TASK_SUCCESS_RESPONSE,
		payload
	}
};
export const setCreateTaskFailureResponseAction = (payload: any): AnyAction => { 
	return {
		type: ReduxTaskAction.SET_CREATE_TASK_FAILURE_RESPONSE,
		payload
	}
};


export const getAllTasksAction = (): AnyAction => { 
	return { 
		type: SagaTask.GET_ALL_TASKS
	}
};
export const setGetAllTasksSuccessResponseAction = (payload: any): AnyAction => { 
	return {
		type: ReduxTaskAction.SET_GET_ALL_TASKS_SUCCESS_RESPONSE,
		payload
	}
};
export const setGetAllTasksFailureResponseAction = (payload: any): AnyAction => { 
	return {
		type: ReduxTaskAction.SET_GET_ALL_TASKS_FAILURE_RESPONSE,
		payload
	}
};


export const deleteTaskAction = (id: number): AnyAction => { 
	return { 
		type: SagaTask.DELETE_TASK_BY_ID,
		payload: id
	}
};
export const setDeleteTaskSuccessResponseAction = (payload: any): AnyAction => { 
	return {
		type: ReduxTaskAction.SET_DELETE_TASK_SUCCESS_RESPONSE,
		payload
	}
};
export const setDeleteTaskFailureResponseAction = (payload: any): AnyAction => { 
	return {
		type: ReduxTaskAction.SET_DELETE_TASK_FAILURE_RESPONSE,
		payload
	}
};


export const makeTaskFinishedByIdAction = (id: number): AnyAction => { 
	return { 
		type: SagaTask.MAKE_TASK_FINISHED,
		payload: id
	}
}
export const setMakeTaskFinishedSuccessResponseAction = (payload: any): AnyAction => { 
	return {
		type: ReduxTaskAction.SET_MAKE_TASK_FINISHED_SUCCESS_RESPONSE,
		payload
	}
};
export const setMakeTaskFinishedFailureResponseAction = (payload: any): AnyAction => { 
	return {
		type: ReduxTaskAction.SET_MAKE_TASK_FINISHED_FAILURE_RESPONSE,
		payload
	}
};