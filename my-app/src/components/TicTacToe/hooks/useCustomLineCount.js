import { useState } from "react";

export const useCustomWinLineCount = () => {
	const [winLineCount, setWinLineCount] = useState(3);

	const setCustomWinLineCount = (num) => {
		// возвращает bool
		num = Number(num);
		if (!isNaN(num)) {
			setWinLineCount(num);
			return true;
		} else {
			return false;
		}
	};

	return [winLineCount, setCustomWinLineCount];
};
