import { useRemoveToDo } from "../../../../../features/removeToDo";

export const RemoveButtonModel = ({ id, RemoveButtonLayout, handleClose }) => {
	const remove = useRemoveToDo();
	function handleRemove() {
		if (window.confirm("Are you sure?")) {
			remove(id);
			handleClose();
		}
	}

	return <RemoveButtonLayout handleRemove={handleRemove} />;
};
