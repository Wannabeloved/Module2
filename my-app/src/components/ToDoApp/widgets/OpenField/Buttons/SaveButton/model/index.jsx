import { useEditInDB } from "../../../../../hooks/useEditInDB";
import { currentToDoSelector } from "../../../../../selectors/currentToDoSelector";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { editToDo as editToDoAction } from "../../../../../../../store/actions/ToDoApp/editToDo";

export const SaveButtonModel = ({
	getTitle,
	setIsEditing,
	SaveButtonLayout,
}) => {
	const dispatch = useDispatch();
	const editInDB = useEditInDB();

	const currentToDo = useSelector(currentToDoSelector);

	const handleSave = () => {
		const { id } = currentToDo || {};
		if (!id) {
			return;
		}
		let newTitle = getTitle();
		dispatch(editToDoAction(id, { title: newTitle }));
		editInDB(id, { ...currentToDo, title: newTitle });
		setIsEditing(false);
	};

	return <SaveButtonLayout handleSave={handleSave} />;
};
