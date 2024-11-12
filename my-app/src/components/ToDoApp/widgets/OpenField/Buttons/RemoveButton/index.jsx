import { RemoveButtonModel } from "./model";
import { RemoveButtonLayout } from "./ui";

export const RemoveButton = ({ id, handleClose }) => {
	return (
		<div>
			<RemoveButtonModel
				RemoveButtonLayout={RemoveButtonLayout}
				id={id}
				handleClose={handleClose}
			/>
		</div>
	);
};
