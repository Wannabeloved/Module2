import { useDispatch } from "react-redux";
import { deleteToDo } from "../../../store/actions/ToDoApp/deleteToDo";
import { addToDo } from "../../../store/actions/ToDoApp/addToDo";
export const useReSetToDo = () => {
	const dispatch = useDispatch();
	return (task) => {
		dispatch(deleteToDo(task.createdAt));
		dispatch(addToDo(task));
	};
};
