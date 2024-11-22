import { removeFromDB } from "./api/removeFromDB";

export const deleteToDo = funcForDeleteToDo(removeFromDB);
function funcForDeleteToDo(removeFromDB) {
	return (id) => async (dispatch) => {
		dispatch({
			type: "REMOVE_TODO_FROM_LIST",
			payload: id,
		});
		const res = await removeFromDB(id);
		console.log("RES::", res);
	};
}
