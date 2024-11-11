import { CreateButtonModel } from "./model";
import { CreateButtonLayout } from "./ui";

export const CreateButton = ({ addNewToDo, somethingIsEditing }) => {
	console.warn(
		"addNewToDo, somethingIsEditing:: ",
		addNewToDo,
		somethingIsEditing,
	);
	return (
		<CreateButtonModel
			addNewToDo={addNewToDo}
			somethingIsEditing={somethingIsEditing}
			CreateButtonLayout={CreateButtonLayout}
		/>
	);
};
