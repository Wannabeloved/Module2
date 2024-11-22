import { findToDoIndexById } from "../helpers/ToDoApp/findToDoByIndex";

const helpers = {
	findToDoIndexById,
};

const INITIAL_STATE = {
	toDoList: [],
	currentToDo: {},
	somethingIsEditing: false,
};

export const todoappReducer = createReducer(INITIAL_STATE, helpers);

function createReducer(initialState, helpers, utils) {
	console.log("!!!!!! 098");
	return (state = initialState, { type, payload }) => {
		console.log("STATE::", state);
		switch (type) {
			case "SET_NEW_LIST":
				console.log("SET_NEW_LIST");
				return {
					...state,
					toDoList: payload,
				};

			case "SET_SOMETHING_IS_EDITING":
				console.log("SET_SOMETHING_IS_EDITING");
				return {
					...state,
					somethingIsEditing: payload,
				};

			case "CREATE_TODO":
				console.log("CREATE_TODO");
				return {
					...state,
					currentToDo: [
						"new",
						{
							title: "newToDo",
							completed: false,
						},
					],
				};
			case "CLEAR_CURRENT_TODO":
				console.log("CLEAR_CURRENT_TODO");
				return {
					...state,
					currentToDo: {},
				};
			case "ADD_TODO_TO_LIST":
				console.log("ADD_TODO_TO_LIST");
				return {
					...state,
					toDoList: [[...payload], ...state.toDoList],
				};

			case "REMOVE_TODO_FROM_LIST":
				console.log("REMOVE_TODO_FROM_LIST");
				return {
					...state,
					toDoList: state.toDoList.toSpliced(
						findToDoIndexById(payload, state.toDoList),
						1,
					),
				};

			case "EDIT_TODO":
				console.log("EDIT_TODO");
				const toDoIndex = findToDoIndexById(payload[0]);
				let updatedToDo = state.toDoList[toDoIndex];
				updatedToDo[1] = { ...updatedToDo[1], ...payload[1] };
				return {
					...state,
					toDoList: [...state.toDoList.toSpliced(toDoIndex, 1, updatedToDo)],
				};

			default:
				console.log("default");
				console.log(state);
				return state;
		}
	};
}
