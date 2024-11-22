export const editToDo = () => {
	return (id, newValues) => (dispatch, getState) => {
		const {
			todoappState: { currentToDo },
		} = getState();
		const { title, createdAt, isCompleted } = currentToDo;

		const updateData = {
			title: newValues.title || title,
			isCompleted: newValues.isCompleted ?? isCompleted,
			createdAt: createdAt,
		};
		console.warn("updateData:: ", updateData);

		dispatch({
			type: "EDIT_TODO",
			payload: [id, { ...updateData }],
		});
	};
};
