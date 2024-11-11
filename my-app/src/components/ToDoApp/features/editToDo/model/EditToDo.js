import { useContext } from "react";
import { CurrentToDoContext } from "../../../contexts/CurrentToDoContext";

export const useFuncForEditToDo = (updateInDB) => {
	const {
		currentTask: { title, createdAt, isCompleted },
	} = useContext(CurrentToDoContext);
	return (id, newValues) => {
		console.warn("newValues:: ", newValues);
		console.warn("newValues.isCompleted:: ", newValues.isCompleted);
		const updateData = {
			title: newValues.title || title,
			isCompleted: newValues.isCompleted ?? isCompleted,
			createdAt: createdAt,
		};
		console.warn("updateData:: ", updateData);

		updateInDB(id, updateData);
	};
};
