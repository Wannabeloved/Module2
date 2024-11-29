import { ConfirmCreateButton } from "../../Buttons/ConfirmCreateButton";
import { CancelCreateButton } from "../../Buttons/CancelCreateButton";

import { useDispatch, useSelector } from "react-redux";

import { CREATE_TODO } from "./../../../../../../store/actions/ToDoApp/CREATE_TODO";
import { CLEAR_CURRENT_TODO } from "../../../../../../store/actions/ToDoApp/CLEAR_CURRENT_TODO";
import { currentToDoSelector } from "../../../../selectors/currentToDoSelector";

import { useEffect } from "react";

export const OpenFieldCreatingModel = ({
	OpenFieldLayout,
	Title,
	isEditing,
	setIsEditing,
	handleClose,
	getTitle,
	id,
}) => {
	const dispatch = useDispatch();
	const currentTask = useSelector(currentToDoSelector);

	useEffect(() => {
		dispatch(CREATE_TODO);
		setIsEditing(true);
		return () => dispatch(CLEAR_CURRENT_TODO);
	}, []);

	const handleCancelCreate = () => {
		dispatch(CLEAR_CURRENT_TODO);
		handleClose();
	};

	const Buttons = () => {
		return (
			<>
				<ConfirmCreateButton
					{...{ getTitle, handleClose: handleCancelCreate }}
				/>
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
			currentTask={currentTask}
		/>
	);
};
