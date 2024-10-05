import { useState } from "react";
export const useMovesCount = () => {
	const [movesCount, setMovesCount] = useState(0);

	const incrementMovesCount = () => {
		let count = movesCount + 1;
		setMovesCount(count);
		return count;
	};
	const resetMovesCount = () => {
		setMovesCount(0);
	};

	return [movesCount, incrementMovesCount, resetMovesCount];
};
