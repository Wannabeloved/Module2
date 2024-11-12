import { SaveButtonModel } from "./model";
import { SaveButtonLayout } from "./ui";

import { useEditToDo } from "../../../../features/editToDo";

export const SaveButton = ({ getTitle, setIsEditing, id }) => {
	const editToDo = useEditToDo();
	return (
		<SaveButtonModel
			{...{ getTitle, editToDo, setIsEditing, SaveButtonLayout, id }}
		/>
	);
};
