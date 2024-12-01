import { MyMap } from "../../MyMap/MyMap";
import { generateTemporaryId } from "./../helpers/ToDoApp/generateTemporaryId";

const helpers = {
	generateTemporaryId,
};

const INITIAL_STATE = {
	toDoList: new MyMap(),
	currentToDo: {},
	somethingIsEditing: false,
};

export const todoappReducer = createReducer(INITIAL_STATE, helpers);

function createReducer(initialState, helpers, utils) {
	return (state = initialState, { type, payload }) => {
		switch (type) {
			case "SET_NEW_LIST":
				return {
					...state,
					toDoList: new MyMap(payload),
				};

			case "SET_SOMETHING_IS_EDITING":
				return {
					...state,
					somethingIsEditing: Boolean(payload),
				};

			case "CREATE_TODO":
				return {
					...state,
					currentToDo: {
						id: "create",
						title: "newToDo",
						completed: false,
					},
				};
			case "SET_CURRENT_TODO":
				// можно сделать так, чтобы сюда можно передать id
				return {
					...state,
					currentToDo: { ...payload },
				};
			case "CLEAR_CURRENT_TODO":
				return {
					...state,
					currentToDo: {},
				};
			case "ADD_TODO_TO_LIST":
				return {
					...state,
					toDoList: new MyMap([
						...state.toDoList,
						[payload.id || payload.createdAt, { ...payload }],
					]),
				};

			case "REMOVE_TODO_FROM_LIST":
				const newList = new MyMap(state.toDoList);
				newList.delete(payload);
				return {
					...state,
					toDoList: newList,
				};

			case "EDIT_TODO":
				const [id, newData] = payload;
				const updatedToDo = { ...state.toDoList.get(id), ...newData };
				const updatedList = new MyMap(state.toDoList);
				updatedList.set(id, updatedToDo);
				return {
					...state,
					toDoList: updatedList,
				};

			default:
				return state;
		}
	};
}
