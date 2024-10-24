import { useRef } from "react";

export const useToDoRef = () => {
	const newToDoRef = useRef(null);

	const getNewToDoInRef = () => {
		return newToDoRef.current;
	};

	const checkAlredyExisting = () => (newToDoRef.current ? true : false);

	const setNewToDoInRef = (newToDo) => {
		newToDoRef.current = { ...newToDo };
		return newToDo;
	};
	const resetNewToDoRef = () => {
		newToDoRef.current = null;
	};

	const changeNewToDoRef = ({ title, isCompleted }) => {
		newToDoRef.current.title = title;
		newToDoRef.current.isCompleted = isCompleted;
	};

	return {
		getNewToDoInRef,
		setNewToDoInRef,
		changeNewToDoRef,
		resetNewToDoRef,
		checkAlredyExisting,
	};
};
