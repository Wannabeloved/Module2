import { CancelCreateButtonModel } from "./model";
import { CancelCreateButtonLayout } from "./ui";

export const CancelCreateButton = ({ handleCancelCreate }) => {
	return (
		<CancelCreateButtonModel
			handleCancelCreate={handleCancelCreate}
			CancelCreateButtonLayout={CancelCreateButtonLayout}
		/>
	);
};
