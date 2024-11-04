import { SaveButton } from "../../ToDo/Buttons/SaveButton";
import { EditButton } from "../../ToDo/Buttons/EditButton";
import { RemoveButton } from "../../ToDo/Buttons/RemoveButton";

import { Completed } from "../../ToDo/Buttons/Completed";

export const OpenButtons = ({
	isEditing,
	setIsEditing,
	setIsCurrentCompleted,
	goToListPage,
	todoInfo: { id, stage, titleRef },
}) => {
	console.warn("stage:: ", stage);
	const existingCardButtons = () =>
		isEditing ? (
			<SaveButton
				{...{
					id,
					titleRef,
					isCompleted: stage.isCompleted,
					createdAt: stage.createdAt,
					setIsEditing,
					goToListPage,
				}}
			/>
		) : (
			<EditButton {...{ setIsEditing }} />
		);

	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr 2fr",
				gap: "10px",
			}}
		>
			<div
				style={{
					height: "fit-content",
					justifySelf: "center",
				}}
			>
				<Completed
					isCurrentCompleted={stage.isCompleted}
					setIsCurrentCompleted={setIsCurrentCompleted}
					otherCardInfo={{ ...stage, id }}
				/>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
				}}
			>
				<div style={{ justifySelf: "center" }}>{existingCardButtons()}</div>
				<div style={{ justifySelf: "center" }}>
					<RemoveButton
						{...{
							id,
							createdAt: stage.createdAt,
							titleRef,
							isCurrentCompleted: stage.isCompleted,
							setIsCurrentCompleted,
							goToListPage,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

/* isEditing ? (
	<SaveButton
		{...{
			id,
			titleRef,
			isCompleted: stage.isCompleted,
			createdAt: stage.createdAt,
			setIsEditing,
			goToListPage,
		}}
	/>
) : (
	<EditButton {...{ setIsEditing }} />
); */
