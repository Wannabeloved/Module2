import { useState } from "react";

export const useMove = (stdSymbols, initialState = "x") => {
	const symbols = Object.keys(stdSymbols);
	const [whoMoves, setWhoMoves] = useState(initialState);

	const change = (symbols) => {
		setWhoMoves((prevVal) => {
			return prevVal === symbols[1] ? symbols[0] : symbols[1];
		});
	};

	const changeSymbol = (isFinish) => {
		if (!isFinish) {
			change(symbols);
		}
	};

	const resetUseMove = (symbolIndex) => {
		setWhoMoves(symbols[symbolIndex]);
	};

	return [whoMoves, changeSymbol, resetUseMove];
};
