import { useState } from "react";
export const useFinish = () => {
	const [isFinish, setIsFinish] = useState(false);

	const finishChecker = (
		indexOfRow,
		indexInRow,
		movesCount,
		whoMoved,
		winLineCount,
		callbacks,
	) => {
		const { checkWin, checkOverflow } = callbacks;

		const win = checkWin(indexOfRow, indexInRow, whoMoved, winLineCount);
		const overflow = checkOverflow(movesCount);

		const isFinish = win || overflow;
		setIsFinish(isFinish);

		return isFinish;
	};

	const resetUseFinish = () => {
		setIsFinish(false);
	};

	return [isFinish, finishChecker, resetUseFinish];
};
