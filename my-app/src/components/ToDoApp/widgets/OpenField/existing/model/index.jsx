import { EditButton } from "../../Buttons/EditButton";
import { SaveButton } from "../../Buttons/SaveButton";
import { RemoveButton } from "../../Buttons/RemoveButton";
import { Completed } from "../../Buttons/Completed";

import { useState } from "react";

import { useContext, useEffect } from "react";
import { CurrentToDoContext } from "../../../../contexts/CurrentToDoContext";
import { useGetFromListById } from "../../../../hooks/useGetFromListById";
import { ToDoListContext } from "../../../../contexts/ToDoListContext";

export const OpenFieldExistingModel = ({
	handleClose,
	OpenFieldLayout,
	id,
	Title,
	getTitle,
	isEditing,
	setIsEditing,
}) => {
	const { currentTask, patchCurrentTask, setCurrentTask } =
		useContext(CurrentToDoContext);
	const { list } = useContext(ToDoListContext);
	const getByID = useGetFromListById();

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isTimeout, setIsTimeout] = useState(false);

	useEffect(() => {
		if (!id) return;
		const controller = new AbortController();
		const getTask = new Promise(
			(resolve, reject) => {
				const task = getByID(list, id);
				console.log("task?.[0]", task?.[0]);
				if (task?.[0]) {
					resolve(task);
				} else {
					reject({ message: "Task not found" });
				}
			},
			{ signal: controller.signal },
		);
		getTask
			.then((task) => {
				setCurrentTask(task[1]);
				setError(null);
			})
			.catch((error) => {
				console.log(error);
				setError(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
		const timeout = setTimeout(() => {
			setIsTimeout(true);
		}, 5000);

		return () => {};
	}, [list]);

	const Buttons = () => {
		return (
			<>
				<Completed patchCurrentTask={patchCurrentTask} id={id} />
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
