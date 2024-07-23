import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateTaskData } from "../../../redux/reducers/taskReducer";
import { deleteTaskAction, getAllTasksAction, makeTaskFinishedByIdAction } from "../../../redux/actions/taskActions";
import ConfirmDialog from "../../../components/ConfirmDialogue/ConfirmDialogue";
import { setPickedTaskId, toggleConfirmationBox } from "../../../redux/actions/dialogueBoxActions";
import { ReduxState } from "../../../redux/reducers/rootReducer";

export interface TaskCardProps extends CreateTaskData { 
	done?: boolean;
	id?: number;
}

export default function TaskCard({ title, description, done, id }: TaskCardProps): JSX.Element { 
	const { deleteTaskSuccessResponse, markTaskFinishedSuccessResponse } = useSelector((state: ReduxState) => state.taskReducer);
	const { pickedCardId } = useSelector((state: ReduxState) => state.dialogueBoxReducer);

	const dispatch = useDispatch();

	const toggleConfirmDialogue = ()  => {;
		dispatch(toggleConfirmationBox());
	};
	const deleteTask = () => {
		dispatch(deleteTaskAction(pickedCardId));
		
		toggleConfirmDialogue();
	};

	useEffect(() => { 
		if (deleteTaskSuccessResponse) { 
			dispatch(getAllTasksAction());

			// Cleanup to avoid fetching on each rerender
		}
	}, [deleteTaskSuccessResponse])
	
	useEffect(() => { 
		if(markTaskFinishedSuccessResponse) { 
			dispatch(getAllTasksAction());
		}
	}, [markTaskFinishedSuccessResponse])


	return <div className={`card card--task ${done ? 'done' : ''}`}>
		<div className="task-info">
			<h2 className="heading heading--secondary">{title}</h2>
			<p className="paragraph paragraph--large">{description}</p>
		</div>

		<div className="control-panel"> 
			<button id="delete-task" className="button" onClick={(e) => { 
				e.stopPropagation();
				dispatch(setPickedTaskId(id))

				toggleConfirmDialogue();

				if (document.activeElement instanceof HTMLElement) {
					document.activeElement.blur(); 
				}
			}} />
			<button id="mark-as-done" className="button" onClick={() => {
				dispatch(makeTaskFinishedByIdAction(id));
			}}/>
		</div> 

		<ConfirmDialog 
			question="Do you really want to delete this task?"
			positive="Delete" 
			negative="Cancel" 
			handlePositiveClick={deleteTask} 
			handleNegativeClick={toggleConfirmDialogue}
			handleCloseButtonClick={toggleConfirmDialogue}
		/>
	</div>
}