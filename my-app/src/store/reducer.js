import { combineReducers } from "redux";

import { tictactoeReducer } from "./reducers";
import { todoappReducer } from "./reducers";

export const reducer = combineReducers({
	tictactoeState: tictactoeReducer,
	todoappState: todoappReducer,
});
