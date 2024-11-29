export const editToDo = (id, newValues) => (dispatch) => {
	dispatch({
		type: "EDIT_TODO",
		payload: [id, { ...newValues }],
	});
};
