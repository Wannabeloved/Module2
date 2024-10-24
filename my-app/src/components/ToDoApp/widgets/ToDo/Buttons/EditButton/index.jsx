import { EditButtonModel } from "./model";
import { EditButtonLayout } from "./ui";

export const EditButton = ({ setIsEditing, setSomethingIsEditing }) => {
	const handleEdit = () => {
		setIsEditing(true);
		setSomethingIsEditing(true);
	};
	return (
		<EditButtonModel
			handleEdit={handleEdit}
			EditButtonLayout={EditButtonLayout}
		/>
	);
};
