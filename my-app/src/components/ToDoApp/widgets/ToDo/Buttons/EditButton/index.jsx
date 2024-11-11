import { EditButtonModel } from "./model";
import { EditButtonLayout } from "./ui";

export const EditButton = ({ setIsEditing }) => {
	return (
		<div>
			<EditButtonModel
				setIsEditing={setIsEditing}
				EditButtonLayout={EditButtonLayout}
			/>
		</div>
	);
};
