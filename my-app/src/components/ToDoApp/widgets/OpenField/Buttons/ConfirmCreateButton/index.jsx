import { ConfirmCreateButtonModel } from "./model";
import { ConfirmCreateButtonLayout } from "./ui";

export const ConfirmCreateButton = ({ getTitle, sendToDB, handleClose }) => {
	return (
		<ConfirmCreateButtonModel
			getTitle={getTitle}
			sendToDB={sendToDB}
			handleClose={handleClose}
			ConfirmCreateButtonLayout={ConfirmCreateButtonLayout}
		/>
	);
};
