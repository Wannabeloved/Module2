import { CreateButtonModel } from "./model";
import { CreateButtonLayout } from "./ui";

export const CreateButton = ({ addNewToDo, somethingIsEditing }) => {
	return (
		<CreateButtonModel
			addNewToDo={addNewToDo}
			somethingIsEditing={somethingIsEditing}
			CreateButtonLayout={CreateButtonLayout}
		/>
	);
};
