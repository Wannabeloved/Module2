import {
	onValue,
	query,
	orderByChild,
	startAt,
	endAt,
	get,
} from "firebase/database";
import { createRef } from "../../../shared/api/createRef";

export const getFromDBById = (id) => {
	return get(createRef(`todos/${id}`));
};

export const connectRealtimeDB = (
	callback,
	substring = "",
	orderBy = "createdAt",
) => {
	if (substring.length > 0) {
		orderBy = "title";
		var queryForTodoRef = [startAt(substring), endAt(substring + "\uf8ff")];
	}

	const todoRef = query(
		createRef("todos"),
		orderByChild(orderBy),
		...(queryForTodoRef || []),
	);

	return onValue(todoRef, (snapshot) => {
		const newList = [];
		snapshot.forEach((child) => {
			newList.push([child.key, { ...child.val() }]);
		});

		callback(newList);
	});
};
