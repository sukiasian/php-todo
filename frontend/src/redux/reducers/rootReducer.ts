import { combineReducers, type Reducer } from 'redux';
import { TaskState, taskReducer } from './taskReducer';
import { DialogueBoxState, dialogueBoxReducer } from './dialogueBoxReducer';

export interface ReduxState {
    taskReducer: TaskState;
	dialogueBoxReducer: DialogueBoxState
}

const rootReducer: Reducer<ReduxState> = combineReducers({
    taskReducer,
	dialogueBoxReducer
});

export default rootReducer;
