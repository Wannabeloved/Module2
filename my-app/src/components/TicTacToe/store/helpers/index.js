import { checkWin } from "./winChecker";
import { checkOverflow } from "./overflowChecker";
import { createMesh } from "./createMesh";

export const helpers = {
	move(state, { indexOfRow, indexInRow }) {
		if (!state.canMove) return state;

		const movesCount = state.movesCount + 1;

		const isWin = state.checkWin(
			state.mesh,
			indexOfRow,
			indexInRow,
			state.whoMoves,
		);
		const isOverflow = state.checkOverflow(movesCount);

		const canMove = !(isWin || isOverflow);

		let i = state.symbols.indexOf(state.whoMoves) + 1;
		if (i === state.symbols.length) i = 0;
		const whoMoves = state.symbols[i];

		return {
			...state,
			whoMoves,
			movesCount,
			isWin,
			isOverflow,
			canMove,
		};
	},

	newGame(state) {
		return {
			...state,
			movesCount: 0,
			isGameOn: true,
			isError: false,
			isOverflow: false,
			isWin: false,
			canMove: true,
			mesh: createMesh(state.columns),
			checkWin: checkWin(state.winLineCount),
			checkOverflow: checkOverflow(state.columns),
		};
	},
};
