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
		if (checkAlredyExisting()) {
			return; // if already existing a todo in the creating process
		}

		const setNewToDoInList = (newToDo) => {
			setList((prev) => {
				return [["unknown", { ...newToDo }], ...prev];
			});
		};

		const newToDo = createToDo();
		console.log("setNewToDoInRef!");
		setNewToDoInRef(newToDo);
		setNewToDoInList(newToDo);

		setSomethingIsEditing(true);
	};

	function funcForFinishCreating(resetNewToDoRef, setSomethingIsEditing) {
		console.log("setSomethingIsEditing:: ", setSomethingIsEditing);
		return function () {
			console.warn("setSomethingIsEditing:: ", setSomethingIsEditing);
			resetNewToDoRef();
			setSomethingIsEditing(false);
		};
	}
	const finishCreating = funcForFinishCreating(
		resetNewToDoRef,
		setSomethingIsEditing,
	);

	const cancelCreate = () => {
		finishCreating();
		setList((prev) => {
			let newVal = prev.toSpliced(
				prev.findIndex((el) => el[0] === "unknown"),
				1,
			);
			return [...newVal];
		});
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
