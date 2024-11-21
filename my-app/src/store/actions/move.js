import { checkWin } from "../helpers";
import { checkOverflow } from "../helpers";
import { setSymbolInMesh } from "../helpers/setSymbolInMesh";

export const move =
	({ indexOfRow, indexInRow }) =>
	(dispatch, getState) => {
		console.log("MOVE IS WORK!!");
		const { tictactoeState: state } = getState();
		console.dir(state);
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

		console.dir({
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
