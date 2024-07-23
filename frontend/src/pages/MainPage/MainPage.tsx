import AddTaskBar from "./AddTaskBar/AddTaskBar";
import AllTasks from "./AllTasks/AllTasks";
import ImportantMessage from "./ImportantMessage/ImportantMessage";

export default function MainPage(): JSX.Element { 
	return <div className="page page--main">
		<ImportantMessage />
		<AddTaskBar />
		<AllTasks />
	</div>
}