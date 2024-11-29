import { ConfirmCreateButtonModel } from "./model";
import { ConfirmCreateButtonLayout } from "./ui";

export const ConfirmCreateButton = ({ getTitle, handleClose }) => {
	return (
		<ConfirmCreateButtonModel
			getTitle={getTitle}
			handleClose={handleClose}
			ConfirmCreateButtonLayout={ConfirmCreateButtonLayout}
		/>
	);
};
