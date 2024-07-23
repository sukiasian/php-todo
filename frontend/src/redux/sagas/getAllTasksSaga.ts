import axios from 'axios';
import { AnyAction } from 'redux';
import { PutEffect, ForkEffect, CallEffect, call, put, takeEvery } from '@redux-saga/core/effects';
import { serverResponseIsSuccessful } from '../../utils/utilFunctions';
import { ApiRoute, SagaTask } from '../../types/enums';
import { setGetAllTasksFailureResponseAction, setGetAllTasksSuccessResponseAction } from '../actions/taskActions';
import { ServerResponse } from '../../types/interfaces';

const getAllTasks = (): Promise<ServerResponse> => {
    return axios.get(ApiRoute.TASKS);
};

function* getAllTasksWorker(action: AnyAction): Generator<CallEffect<any> | PutEffect<AnyAction>, void> {
    try {
        const response = yield call(getAllTasks);

        if (serverResponseIsSuccessful(response as ServerResponse)) {
            yield put(setGetAllTasksSuccessResponseAction(response as ServerResponse));
        } else {
            throw response;
        }
    } catch (err) { 
        yield put(setGetAllTasksFailureResponseAction(err as ServerResponse));
    }
}

export function* watchGetAllTasks(): Generator<ForkEffect, void, void> {
    yield takeEvery(SagaTask.GET_ALL_TASKS, getAllTasksWorker);
}
