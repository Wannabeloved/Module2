import { checkWin } from "../helpers";
import { checkOverflow } from "../helpers";
import { setSymbolInMesh } from "../helpers/setSymbolInMesh";

export const move =
	({ indexOfRow, indexInRow }) =>
	(dispatch, getState) => {
		const { tictactoeState: state } = getState();
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

		dispatch({
			type: "MOVE",
			payload: {
				whoMoves,
				movesCount,
				isWin,
				isOverflow,
				canMove,
				mesh,
			},
		});
		return true;
	};