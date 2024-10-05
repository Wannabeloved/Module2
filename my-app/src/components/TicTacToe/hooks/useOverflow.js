/* 
	Хук принимает в качестве параметров:
		'columns' - сколько колонок в игровой сетке
		(для вычисления максимального количества ходов)

		(ToDo: передавать сразу максимальное число ходов)
	Возвращает:
		функцию 'isFinish' (
			принимает:
				'isWin' - выиграл ли кто-то
				'whoMoves' - кто ходил
			
		);
*/
import { useState } from "react";
export const useOverflow = (stdColumns, cols) => {
	let maxNumOfMoves = cols ** 2;

	const [isOverflow, setIsOverflow] = useState(false);

	const checkOverflow = (movesCount) => {
		const isOverflow = movesCount >= maxNumOfMoves;

		if (isOverflow) {
			// стейт изменится только после перерендера
			setIsOverflow(isOverflow);
		}
		return isOverflow; // а вернётся значение сразу после выполнения функции, что позволит использовать актуальное значение сразу
	};

	return [isOverflow, checkOverflow];
};
