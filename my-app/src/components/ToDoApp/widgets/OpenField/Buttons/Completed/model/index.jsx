import { currentToDoSelector } from "../../../../../selectors/currentToDoSelector";
import { useSelector } from "react-redux";

import { useEditInDB } from "../../../../../hooks/useEditInDB";

import { useDispatch } from "react-redux";
import { editToDo } from "../../../../../../../store/actions/ToDoApp/editToDo";

import debounce from "debounce";

const debounced = debounce((editInDB, id, editedFields) => {
	editInDB(id, editedFields);
}, 1200);

export const CompletedModel = ({ CompletedLayout }) => {
	const currentToDo = useSelector(currentToDoSelector);

	const { id, completed } = currentToDo || {};

	const editInDB = useEditInDB();
	const dispatch = useDispatch();

	const handleCompleted = () => {
		dispatch(editToDo(id, { completed: !completed }));
		debounced(editInDB, id, { ...currentToDo, completed: !completed });
	};
	return (
		<CompletedLayout handleCompleted={handleCompleted} completed={completed} />
	);
};
