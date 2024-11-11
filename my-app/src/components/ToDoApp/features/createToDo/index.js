import { funcForSendToDB } from "./api/sendToDB";
import { createToDo } from "./model/createToDo";
import { createRef } from "../../shared/api/createRef";

import { useContext } from "react";
import { CurrentToDoContext } from "../../contexts/CurrentToDoContext";

export const useCreateToDo = () => {
	const { setCurrentTask } = useContext(CurrentToDoContext);

	const addNewToDo = () => {
		const newToDo = createToDo();
		console.warn("setNewToDoInRef::", newToDo);
		setCurrentTask(newToDo);
		return newToDo;
	};

	const finishCreating = () => {
		setCurrentTask({});
	};

	// this is function
	const sendToDB = (updatedData) =>
		funcForSendToDB({ createRef })(updatedData).then(() => {
			finishCreating();
		});

	return {
		addNewToDo,
		sendToDB,
		finishCreating,
	};
};
