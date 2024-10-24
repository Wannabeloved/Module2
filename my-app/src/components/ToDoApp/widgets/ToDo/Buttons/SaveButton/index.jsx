import { SaveButtonModel } from "./model";
import { SaveButtonLayout } from "./ui";

import { useEditToDo } from "../../../../features/editToDo";

export const SaveButton = ({
	setIsEditing,
	setSomethingIsEditing,
	id,
	titleRef,
	isCompleted,
	createdAt,
}) => {
	console.warn("createdAt in index SaveButton:: ", createdAt);
	const editToDo = useEditToDo();
	return (
		<SaveButtonModel
			setIsEditing={setIsEditing}
			setSomethingIsEditing={setSomethingIsEditing}
			editToDo={editToDo}
			toDoInfo={{ id, titleRef, isCompleted, createdAt }}
			SaveButtonLayout={SaveButtonLayout}
		/>
	);
};
