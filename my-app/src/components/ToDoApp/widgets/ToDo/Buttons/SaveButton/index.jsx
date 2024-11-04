import { SaveButtonModel } from "./model";
import { SaveButtonLayout } from "./ui";

import { useEditToDo } from "../../../../features/editToDo";

export const SaveButton = ({
	id,
	titleRef,
	isCompleted,
	createdAt,
	setIsEditing,
	goToListPage,
}) => {
	console.warn("createdAt in index SaveButton:: ", createdAt);
	const editToDo = useEditToDo();
	return (
		<SaveButtonModel
			editToDo={editToDo}
			toDoInfo={{ id, titleRef, isCompleted, createdAt }}
			setIsEditing={setIsEditing}
			SaveButtonLayout={SaveButtonLayout}
			goToListPage={goToListPage}
		/>
	);
};
