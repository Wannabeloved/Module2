import { EditButtonModel } from "./model";
import { EditButtonLayout } from "./ui";

export const EditButton = ({ setIsEditing }) => {
	const handleEdit = () => {
		setIsEditing(true);
	};
	return (
		<div>
			<EditButtonModel
				handleEdit={handleEdit}
				EditButtonLayout={EditButtonLayout}
			/>
		</div>
	);
};
