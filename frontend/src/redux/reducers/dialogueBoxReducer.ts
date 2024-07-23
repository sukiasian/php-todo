import { type AnyAction } from 'redux';
import { ReduxDialogueBoxAction } from '../../types/enums';

export interface DialogueBoxState {
	confirmDialogueBoxIsOpen?: boolean;
	pickedCardId?: number;
}

const initialState: DialogueBoxState = {};

export const dialogueBoxReducer = (state = initialState, action: AnyAction): DialogueBoxState => {
	switch (action.type) {
        case ReduxDialogueBoxAction.TOGGLE_CONFIRMATION_BOX_IS_OPEN:
            return {
                ...state,
                confirmDialogueBoxIsOpen: !state.confirmDialogueBoxIsOpen
            };

		case ReduxDialogueBoxAction.SET_PICKED_TASK_ID: 
			return { 
				...state, 
				pickedCardId: action.payload
			}
		
		default: 
			return { 
				...state
			}
	}
};