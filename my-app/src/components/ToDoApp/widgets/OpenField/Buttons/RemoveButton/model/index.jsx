import { useDeleteFromDB } from "../../../../../hooks/useDeleteFromDB";

import { useDispatch } from "react-redux";
import { deleteToDo as deleteToDoAction } from "../../../../../../../store/actions/ToDoApp/deleteToDo";

export const RemoveButtonModel = ({ id, RemoveButtonLayout, handleClose }) => {
	const dispatch = useDispatch();
	const remove = useDeleteFromDB();
	function handleRemove() {
		if (window.confirm("Are you sure?")) {
			remove(id);
			dispatch(deleteToDoAction(id));
			handleClose();
		}
	}

	return <RemoveButtonLayout handleRemove={handleRemove} />;
};
