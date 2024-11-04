import { funcForSendToDB } from "./api/sendToDB";
import { createToDo } from "./model/createToDo";
import { useToDoRef } from "./model/useToDoRef";
import { createRef } from "../../shared/api/createRef";

export const useCreateToDo = (setList, setSomethingIsEditing) => {
	const {
		getNewToDoInRef,
		setNewToDoInRef,
		changeNewToDoRef,
		resetNewToDoRef,
		checkAlredyExisting,
	} = useToDoRef();

	const addNewToDo = () => {
		const newToDo = createToDo();
		console.warn("setNewToDoInRef::", newToDo);
		setNewToDoInRef(newToDo);
		return newToDo;
	};

	function funcForFinishCreating(resetNewToDoRef, setSomethingIsEditing) {
		console.log("setSomethingIsEditing:: ", setSomethingIsEditing);
		return function () {
			console.warn("setSomethingIsEditing:: ", setSomethingIsEditing);
			resetNewToDoRef();
		};
	}
	const finishCreating = funcForFinishCreating(resetNewToDoRef);

	const cancelCreate = () => {
		finishCreating();
	};

	// this is function
	const sendToDB = (updatedData) =>
		funcForSendToDB({ createRef })(updatedData).then(() => {
			finishCreating();
		});

	return {
		addNewToDo,
		sendToDB,
		cancelCreate,
		changeNewToDoRef,
	};
};
