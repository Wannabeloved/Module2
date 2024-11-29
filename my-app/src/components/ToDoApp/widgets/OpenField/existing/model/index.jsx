import { EditButton } from "../../Buttons/EditButton";
import { SaveButton } from "../../Buttons/SaveButton";
import { RemoveButton } from "../../Buttons/RemoveButton";
import { Completed } from "../../Buttons/Completed";

import { useState } from "react";

import { useEffect } from "react";
import { getToDoByIdSelector } from "../../../../selectors/toDoByIdSelector";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentToDo } from "../../../../../../store/actions/ToDoApp/setCurrentToDo";
import { currentToDoSelector } from "../../../../selectors/currentToDoSelector";

export const OpenFieldExistingModel = ({
	handleClose,
	OpenFieldLayout,
	Title,
	getTitle,
	isEditing,
	setIsEditing,
	id,
}) => {
	const dispatch = useDispatch();
	const setCurrentTask = (task) => {
		dispatch(setCurrentToDo(task));
	};

	const todoWithCurrentId = useSelector(getToDoByIdSelector(id));

	const currentTask = useSelector(currentToDoSelector);

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isTimeout, setIsTimeout] = useState(false);

	useEffect(() => {
		setCurrentTask(todoWithCurrentId);
	}, [todoWithCurrentId]);

	const Buttons = () => {
		return (
			<>
				<Completed />
				{isEditing ? (
					<SaveButton getTitle={getTitle} setIsEditing={setIsEditing} id={id} />
				) : (
					<EditButton setIsEditing={setIsEditing} />
				)}
				<RemoveButton id={id} handleClose={handleClose} />
			</>
		);
	};

	return (
		<OpenFieldLayout
			Title={Title}
			Buttons={Buttons}
			handleClose={handleClose}
			error={error}
			isLoading={isLoading}
			isTimeout={isTimeout}
			isEditing={isEditing}
			currentTask={currentTask}
		/>
	);
};
