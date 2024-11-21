import { combineReducers } from "redux";

import { tictactoeReducer } from "./reducers";

export const reducer = combineReducers({
	tictactoeState: tictactoeReducer,
});
