import { useContext } from "react";
import { CurrentToDoContext } from "../../../../../contexts/CurrentToDoContext";
export const SaveButtonModel = ({
	id,
	getTitle,
	editToDo,
	setIsEditing,
	SaveButtonLayout,
}) => {
	const { patchCurrentTask } = useContext(CurrentToDoContext);
	const handleSave = () => {
		let newTitle = getTitle();
		console.log("newTitle", newTitle);
		patchCurrentTask({ title: newTitle });
		editToDo(id, { title: newTitle });
		setIsEditing(false);
	};

	return <SaveButtonLayout handleSave={handleSave} />;
};
