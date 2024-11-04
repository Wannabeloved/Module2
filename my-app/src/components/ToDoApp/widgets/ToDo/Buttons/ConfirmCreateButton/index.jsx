import { ConfirmCreateButtonModel } from "./model";
import { ConfirmCreateButtonLayout } from "./ui";

export const ConfirmCreateButton = ({
	functions: { sendToDB, goToListPage },
	titleRef,
	isCurrentCompleted,
	createdAt,
}) => {
	return (
		<ConfirmCreateButtonModel
			sendToDB={sendToDB}
			createdAt={createdAt}
			{...{
				titleRef,
				isCurrentCompleted,
			}}
			ConfirmCreateButtonLayout={ConfirmCreateButtonLayout}
			goToListPage={goToListPage}
		/>
	);
};
