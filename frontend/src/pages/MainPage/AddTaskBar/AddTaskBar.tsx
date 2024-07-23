import { useDispatch, useSelector } from "react-redux"
import { createTaskAction, getAllTasksAction, setCreateTaskDataAction } from "../../../redux/actions/taskActions";

import { ReduxState } from "../../../redux/reducers/rootReducer";
import { useEffect } from "react";

export default function AddTaskBar(): JSX.Element { 
	const { createTaskData, createTaskSuccessResponse, createTaskFailureResponse } = useSelector((state: ReduxState) => state.taskReducer);

	const dispatch = useDispatch();

	const setTitle = (title: string): void => {  
		dispatch(setCreateTaskDataAction({ ...createTaskData, title }));
	}

	const setDescription = (description: string): void => { 
		dispatch(setCreateTaskDataAction({ ...createTaskData, description }));
	}

	const createTask = (): void => { 
		dispatch(createTaskAction(createTaskData));
	}

	useEffect(() => { 
		if(createTaskSuccessResponse) {
			dispatch(getAllTasksAction());
		}

		return () => { 
			// cleanup
		}
	}, [createTaskSuccessResponse])

	return <section className="add-task-bar">
		<div className="panel"> 
			<input className="" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
			<textarea placeholder="Description..." onChange={(e) => setDescription(e.target.value)} />
			
			<button className="button button--round" onClick={() => createTask()}>Create a task</button>
		</div>
	</section>
}