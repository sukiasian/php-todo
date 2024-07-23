import { all } from '@redux-saga/core/effects';
import { watchCreateTask } from './createTaskSaga';
import { watchGetAllTasks } from './getAllTasksSaga';
import { watchDeleteTaskById } from './deleteTaskSaga';
import { watchMakeTaskFinished } from './makeTaskFinishedSaga';

export function* rootSaga() {
    yield all([
		watchCreateTask(),
		watchGetAllTasks(),
		watchDeleteTaskById(),
		watchMakeTaskFinished()
	]);
}