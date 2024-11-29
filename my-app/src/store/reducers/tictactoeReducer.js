import { helpers } from "../helpers";
import { createMesh } from "../helpers";
import { utils } from "../utils";

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

export const tictactoeReducer = createReducer(INITIAL_STATE, helpers, utils);

function createReducer(initialState, helpers, utils) {
	return (state = initialState, { type, payload }) => {
		// legacy... )

		// все действия "настройки" начинаются с "SET"
		switch (type) {
			case "SET_COLUMNS":
				const columns = utils.convertToNumber(payload, "SET_COLUMNS");
				return { ...state, columns };

			case "SET_WIN_LINE_COUNT":
				const winLineCount = utils.convertToNumber(
					payload,
					"SET_WIN_LINE_COUNT",
				);
				return { ...state, winLineCount };

			case "SET_COLUMNS_AND_WIN_LINE_COUNT":
				// не рендерится нормально если делать разными операциями подряд
				const num = utils.convertToNumber(payload);
				return { ...state, winLineCount: num, columns: num };

			case "ERROR":
				return { ...state, isError: true };

			case "START_NEW_GAME":
				return {
					...state,
					isError: false,
					isOverflow: false,
					isWin: false,

					movesCount: 0,
					canMove: true,

					mesh: createMesh(state.columns),
					isGameOn: true,
				};

			case "RESET":
				return { ...initialState };

			case "MOVE":
				return {
					...state,
					...payload,
				};

			default:
				return state;
		}
	};
}
