import { checkWin } from "./winChecker";
import { checkOverflow } from "./overflowChecker";
import { createMesh } from "./createMesh";
import { setSymbolInMesh } from "./setSymbolInMesh";
export { checkWin, checkOverflow, createMesh, setSymbolInMesh };

export const helpers = {
	move(state, { indexOfRow, indexInRow }) {
		if (!state.canMove) return state;

		const movesCount = state.movesCount + 1;
		const mesh = setSymbolInMesh(
			state.mesh,
			indexOfRow,
			indexInRow,
			state.whoMoves,
		);

		const isWin = checkWin(
			state.winLineCount,
			state.mesh,
			indexOfRow,
			indexInRow,
			state.whoMoves,
		);
		const isOverflow = checkOverflow(state.columns, movesCount);

		const canMove = !(isWin || isOverflow);

		let whoMoves = state.whoMoves;
		if (canMove) {
			let i = state.symbols.indexOf(state.whoMoves) + 1;
			if (i === state.symbols.length) i = 0;
			whoMoves = state.symbols[i];
		}

		return {
			...state,
			whoMoves,
			movesCount,
			isWin,
			isOverflow,
			canMove,
			mesh,
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
		};
	},
};
