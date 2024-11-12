import { useContext } from "react";
import { CurrentToDoContext } from "../../../../../contexts/CurrentToDoContext";

import debounce from "debounce";

import { useEditToDo } from "../../../../../features/editToDo";

const debounced = debounce((editToDo, id, isCompleted) => {
	editToDo(id, { isCompleted });
}, 1200);

export const CompletedModel = ({ id, patchCurrentTask, CompletedLayout }) => {
	const {
		currentTask: { isCompleted },
	} = useContext(CurrentToDoContext);

	const editToDo = useEditToDo();

	const handleCompleted = () => {
		patchCurrentTask({ isCompleted: !isCompleted });
		debounced(editToDo, id, !isCompleted);
	};
	return (
		<CompletedLayout
			handleCompleted={handleCompleted}
			isCompleted={isCompleted}
		/>
	);
};
