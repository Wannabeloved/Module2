import { ToDoModel } from "./model";
import { ToDoLayout } from "./ui";

export const ToDo = ({ taskInfo }) => {
	return <ToDoModel taskInfo={taskInfo} ToDoLayout={ToDoLayout} />;
};
