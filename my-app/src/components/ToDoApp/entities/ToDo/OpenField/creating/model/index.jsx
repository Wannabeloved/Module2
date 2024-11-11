import { useCreateToDo } from "../../../../../features/createToDo";

import { ConfirmCreateButton } from "../../../../../widgets/ToDo/Buttons/ConfirmCreateButton";
import { CancelCreateButton } from "../../../../../widgets/ToDo/Buttons/CancelCreateButton";

import { useEffect } from "react";

export const OpenFieldCreatingModel = ({
	OpenFieldLayout,
	Title,
	isEditing,
	setIsEditing,
	setCurrentTask,
	handleClose,
	getTitle,
}) => {
	const { sendToDB, addNewToDo, finishCreating } = useCreateToDo();
	useEffect(() => {
		addNewToDo();
		setIsEditing(true);
	}, []);

	const handleCancelCreate = () => {
		finishCreating();
		handleClose();
	};

	const Buttons = () => {
		return (
			<>
				<ConfirmCreateButton {...{ getTitle, sendToDB, handleClose }} />
				<CancelCreateButton {...{ handleCancelCreate }} />
			</>
		);
	};

	return (
		<OpenFieldLayout
			Title={Title}
			Buttons={Buttons}
			handleClose={handleCancelCreate}
			isEditing={isEditing}
		/>
	);
};
