import {
	onValue,
	query,
	orderByChild,
	startAt,
	endAt,
} from "firebase/database";
import { createRef } from "./../../../shared/api/createRef";

export const connectRealtimeDB = (
	callback,
	substring = "",
	orderBy = "createdAt",
) => {
	let queryForTodoRef = [];
	if (substring.length > 0) {
		orderBy = "title";
		queryForTodoRef = [startAt(substring), endAt(substring + "\uf8ff")];
	}
	const todoRef = query(createRef("todos"), orderByChild(orderBy));

	const filteredTodoRef = query(todoRef, ...queryForTodoRef);

	return onValue(filteredTodoRef, (snapshot) => {
		const newList = [];
		snapshot.forEach((child) => {
			newList.push([child.key, { ...child.val() }]);
		});

		callback(newList);
	});
};
