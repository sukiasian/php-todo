import axios from 'axios';
import { AnyAction } from 'redux';
import { PutEffect, ForkEffect, CallEffect, call, put, takeEvery } from '@redux-saga/core/effects';
import { serverResponseIsSuccessful } from '../../utils/utilFunctions';
import { ApiRoute, SagaTask } from '../../types/enums';
import { setDeleteTaskFailureResponseAction, setDeleteTaskSuccessResponseAction } from '../actions/taskActions';
import { ServerResponse } from '../../types/interfaces';

const makeTaskFinished = (id: number): Promise<ServerResponse> => {
    return axios.patch(`${ApiRoute.TASKS}/${id}`);
};

function* makeTaskFinishedWorker(action: AnyAction): Generator<CallEffect<any> | PutEffect<AnyAction>, void> {
    try {
        const response = yield call(makeTaskFinished, action.payload);

        if (serverResponseIsSuccessful(response as ServerResponse)) {
            yield put(setDeleteTaskSuccessResponseAction(response as ServerResponse));
        } else {
            throw response;
        }
    } catch (err) { 
        yield put(setDeleteTaskFailureResponseAction(err as ServerResponse));
    }
}

export function* watchMakeTaskFinished(): Generator<ForkEffect, void, void> {
    yield takeEvery(SagaTask.MAKE_TASK_FINISHED, makeTaskFinishedWorker);
}
