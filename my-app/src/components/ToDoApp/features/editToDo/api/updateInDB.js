import { update, set, serverTimestamp } from "firebase/database";
import { createRef } from "../../../shared/api/createRef";

export const updateInDB = (id, updateData) => {
	const todoRef = createRef(`todos/${id}`);

	if (!updateData.isCompleted) {
		putToDo(todoRef, updateData);
	} else {
		patchToDo(todoRef, updateData);
	}
};

function patchToDo(todoRef, updateData) {
	update(todoRef, updateData);
}

function putToDo(todoRef, { title, isCompleted, createdAt }) {
	const updatedData = {
		title,
		isCompleted: false,
		createdAt,
		updatedAt: serverTimestamp(),
	};

	set(todoRef, updatedData);
}
