import { useState } from "react";

export const useCustomColumnsCount = (stdColumnsCount) => {
	const [columnsCount, setColumnsCount] = useState(stdColumnsCount);

	const setCustomColumnsCount = (num) => {
		// возвращает bool
		num = Number(num);
		if (!isNaN(num)) {
			setColumnsCount(num);
			return true;
		} else {
			return false;
		}
	};

	return [columnsCount, setCustomColumnsCount];
};
