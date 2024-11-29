export const deleteToDo = (id) => (dispatch) => {
	dispatch({
		type: "REMOVE_TODO_FROM_LIST",
		payload: id,
	});
};
