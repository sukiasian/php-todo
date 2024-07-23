import { AnyAction } from "redux";
import { ReduxDialogueBoxAction } from "../../types/enums";

export const toggleConfirmationBox = (): AnyAction => { 
	return { 
		type: ReduxDialogueBoxAction.TOGGLE_CONFIRMATION_BOX_IS_OPEN
	}
};

export const setPickedTaskId = (payload: number | null): AnyAction => {
	return { 
		type: ReduxDialogueBoxAction.SET_PICKED_TASK_ID,
		payload
	}
}