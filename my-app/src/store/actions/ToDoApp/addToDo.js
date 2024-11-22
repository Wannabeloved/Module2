import { addToDB } from "./api/addToDB";

export const addToDo = funcForAddToDo(addToDB);
function funcForAddToDo(addToDB) {
	return () => (dispatch, getState) => {
		const { currentToDo } = getState().todoappState;
		dispatch({
			type: "ADD_TODO_TO_LIST",
			payload: currentToDo,
		});
		addToDB(currentToDo);
	};
}
