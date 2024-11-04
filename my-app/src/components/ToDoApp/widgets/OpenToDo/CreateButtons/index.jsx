import { ConfirmCreateButton } from "../../ToDo/Buttons/ConfirmCreateButton";
import { CancelCreateButton } from "../../ToDo/Buttons/CancelCreateButton";
export const CreateButtons = ({
	sendToDB,
	goToListPage,
	handleCancelCreate,
	stage,
	titleRef,
}) => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr 1fr",
				gap: "10px",
			}}
		>
			<ConfirmCreateButton
				{...{
					functions: { sendToDB, goToListPage },
					titleRef,
					isCurrentCompleted: stage.isCompleted,
					createdAt: stage.createdAt,
				}}
			/>
			<CancelCreateButton cancelCreate={handleCancelCreate} />
		</div>
	);
};
