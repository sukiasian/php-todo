import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasksAction } from "../../../redux/actions/taskActions";
import { ReduxState } from "../../../redux/reducers/rootReducer";
import { Task } from "../../../types/interfaces";
import TaskCard from "../TaskCard/TaskCard";

export default function AllTasks(): JSX.Element { 
	const { getAllTasksSuccessResponse, getAllTasksFailureResponse } = useSelector((state: ReduxState) => state.taskReducer);

	const dispatch = useDispatch();

	const fetchAllTasks = () => { 
		dispatch(getAllTasksAction());
	};

	const renderTasksIfFetched = (): JSX.Element | null => {
		if(getAllTasksSuccessResponse) { 
			const { data }  = getAllTasksSuccessResponse.data; 
			
			return data.map((task: Task, i: number) => { 
				return <TaskCard key={i} title={task.title} description={task.description} done={task.done} id={task.id}/>
			}).reverse();
		}

		return null;
	};

	const renderFetchingTasksError = (): JSX.Element | null => { 
		if(getAllTasksFailureResponse) { 
			<p> error</p>
		}	

		return null;
	};

	useEffect(() => { 
		fetchAllTasks();

		return () => { 
			// cleanup redux 
		}
	}, []);

	return <section className="all-tasks">
		{renderTasksIfFetched()}
		{renderFetchingTasksError()}
	</section>;
}