import { checkWin } from "./winChecker";
import { checkOverflow } from "./overflowChecker";
import { createMesh } from "./createMesh";
import { setSymbolInMesh } from "./setSymbolInMesh";
export { checkWin, checkOverflow, createMesh };

export const helpers = {
	move(state, { indexOfRow, indexInRow }) {
		if (!state.canMove) return state;
		console.warn("IN MOVE:: ", { indexOfRow, indexInRow });

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

		console.log({
			isWin,
			isOverflow,
			canMove,
		});

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
