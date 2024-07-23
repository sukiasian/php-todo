import axios from 'axios';
import { AnyAction } from 'redux';
import { PutEffect, ForkEffect, CallEffect, call, put, takeEvery } from '@redux-saga/core/effects';
import { serverResponseIsSuccessful } from '../../utils/utilFunctions';
import { CreateTaskData } from '../reducers/taskReducer';
import { ApiRoute, SagaTask } from '../../types/enums';
import { setCreateTaskFailureResponseAction, setCreateTaskSuccessResponseAction } from '../actions/taskActions';
import { ServerResponse } from '../../types/interfaces';

const createTask = (payload: CreateTaskData): Promise<ServerResponse> => {
    return axios.post(ApiRoute.TASKS, payload);
};

function* createTaskWorker(action: AnyAction): Generator<CallEffect<any> | PutEffect<AnyAction>, void> {
    try {
        const response = yield call(createTask, action.payload);

        if (serverResponseIsSuccessful(response as ServerResponse)) {
            yield put(setCreateTaskSuccessResponseAction(response as ServerResponse));
        } else {
            throw response;
        }
    } catch (err) {
        yield put(setCreateTaskFailureResponseAction(err as ServerResponse));
    }
}
export function* watchCreateTask(): Generator<ForkEffect, void, void> {
    yield takeEvery(SagaTask.CREATE_TASK, createTaskWorker);
}
