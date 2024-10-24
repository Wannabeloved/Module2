import { serverTimestamp } from "firebase/database";
export const createToDo = () => {
	// if (creatingRef.current) {
	// 	// if already existing a todo in the creating process
	// 	return;
	// }

	return {
		title: "New ToDo",
		isCompleted: false,
		isNew: true,
		createdAt: serverTimestamp(),
	};
};
