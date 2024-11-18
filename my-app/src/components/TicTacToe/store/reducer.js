import { helpers } from "./helpers";
import { createMesh } from "./helpers";
import { utils } from "./utils";

const INITIAL_STATE = {
	isGameOn: false,
	movesCount: 0,
	columnsRange: [2, 6],
	columns: 3,
	winLineCount: 3,
	isError: false,
	symbols: ["x", "o"],
	whoMoves: "x",
	mesh: createMesh(3),
	canMove: true,
};

export const reducer = createReducer(INITIAL_STATE, helpers, utils);

function createReducer(initialState, helpers, utils) {
	return (state = initialState, { type, payload }) => {
		console.log("switch is work");
		// legacy... )

		// все действия "настройки" начинаются с "SET"
		switch (type) {
			case "SET_COLUMNS":
				console.log(`SET_COLUMNS WORK: ${payload}`);
				const columns = utils.convertToNumber(payload, "SET_COLUMNS"); // тяжело без типизации((
				console.log(columns);
				return { ...state, columns };

			case "SET_WIN_LINE_COUNT":
				console.log(`IM WORK: ${payload}`);
				const winLineCount = utils.convertToNumber(
					payload,
					"SET_WIN_LINE_COUNT",
				);
				return { ...state, winLineCount };

			case "SET_COLUMNS_AND_WIN_LINE_COUNT":
				console.log(`SET_COLUMNS_AND_WIN_LINE_COUNT: ${payload}`);
				// не рендерится нормально если делать разными операциями подряд
				const num = utils.convertToNumber(payload);
				return { ...state, winLineCount: num, columns: num };

			case "ERROR":
				return { ...state, isError: true };

			case "START_NEW_GAME":
				console.log("START_NEW_GAME");
				return helpers.newGame(state);
			case "RESET":
				return { ...initialState };

			case "MOVE":
				return helpers.move(state, payload);

			default:
				console.warn(`No handler for ${type} type of action`);
				return state;
		}
	};
}
