export const getToDoByIdSelector = (id) => (state) => {
	const list = state.todoappState.toDoList;
	const listItem = list.get(id);
	return listItem;
};
