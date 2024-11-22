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
	const { currentToDo } = useSelector(currentToDoSelector);
	const { id, isCompleted } = currentToDo;

	const editInDB = useEditInDB();
	const dispatch = useDispatch();

	const handleCompleted = () => {
		dispatch(editToDo({ isCompleted: !isCompleted }));
		debounced(editInDB, id, { ...currentToDo, isCompleted: !isCompleted });
	};
	return (
		<CompletedLayout
			handleCompleted={handleCompleted}
			isCompleted={isCompleted}
		/>
	);
};
