import { CancelCreateButtonModel } from "./model";
import { CancelCreateButtonLayout } from "./ui";

export const CancelCreateButton = ({ cancelCreate }) => {
	return (
		<CancelCreateButtonModel
			cancelCreate={cancelCreate}
			CancelCreateButtonLayout={CancelCreateButtonLayout}
		/>
	);
};
