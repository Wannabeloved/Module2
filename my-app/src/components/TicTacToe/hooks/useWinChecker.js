import { useState } from "react";

/* 
	В качестве параметров хук принимает 'mesh' (массив в котором описано игровое поле) и количество ходов для победы 'cellsForWin' (сколько нужно собрать ходов в одну линию).

	Возвращает:
		функцию 'isWin' (
			Принимает: 
				индекс строки в сетке, индекс символа в строке, символ
			Возвращает: 
				true если выиграл,
				false если нет
	 	);
*/
export const useWinChecker = (mesh) => {
	/*
		Все функции должны находиться в массиве 'allCheckers' чтобы иметь возможность быть вызванными при проверке выигрыша (в функции 'isWin').
		Функции должны возвращать значение типа 'Boolean' (true в случае выигрыша и false в остальных случаях).
	*/
	/*
		В целом описание работы алгоритма выглядит следующим образом:

		Вызывается функция 'isWin' которая вызывает проверки, указатели на которые лежат в 'allCheckers'.
		Начиная с указанного индекса, по одной, проводится проверка каждой прямой (сначала в одну сторону, потом, по этомй же прямой, в противоположную);
		Когда все проверки выполнены, из функции 'isWin' возвращается Boolean значение true, если хотябы одна из проверок была успешна, и false, если ни одна из проверок не была пройдена.
	*/
	const isDiagonalWin = (indexOfRow, indexInRow, symbol, cellsForWin) => {
		let winCells = 1;
		let max_val = cellsForWin + 1;
		for (let i = 1; i < cellsForWin + 1; i++) {
			// вниз-вправо
			if (mesh[indexOfRow + i]?.[indexInRow + i] === symbol) {
				winCells++;
			} else {
				break;
			}
		}

		max_val = cellsForWin + 1 - winCells;
		for (let i = 1; i < max_val; i++) {
			// вверх-влево
			if (mesh[indexOfRow - i]?.[indexInRow - i] === symbol) {
				winCells++;
			} else {
				break;
			}
		}

		if (winCells >= cellsForWin) {
			return true;
		} else {
			winCells = 1;
		}

		max_val = cellsForWin + 1;
		for (let i = 1; i < max_val; i++) {
			// вниз-влево
			if (mesh[indexOfRow + i]?.[indexInRow - i] === symbol) {
				winCells++;
			} else {
				break;
			}
		}

		max_val = cellsForWin + 1 - winCells;
		for (let i = 1; i < max_val; i++) {
			// вверх-вправо
			if (mesh[indexOfRow - i]?.[indexInRow + i] === symbol) {
				winCells++;
			} else {
				break;
			}
		}

		return winCells >= cellsForWin;
	};

	const isVerticalWin = (indexOfRow, indexInRow, symbol, cellsForWin) => {
		let winCells = 1;
		let max_val = cellsForWin + 1;
		for (let i = 1; i < max_val; i++) {
			// вниз

			if (mesh[indexOfRow + i]?.[indexInRow] === symbol) {
				winCells++;
			} else {
				break;
			}
		}

		max_val = cellsForWin + 1 - winCells;
		for (let i = 1; i < max_val; i++) {
			// вверх

			if (mesh[indexOfRow - i]?.[indexInRow] === symbol) {
				winCells++;
			} else {
				break;
			}
		}

		return winCells >= cellsForWin;
	};
	const isHorizontalWin = (indexOfRow, indexInRow, symbol, cellsForWin) => {
		let winCells = 1;
		let max_val = cellsForWin + 1;
		for (let i = 1; i < max_val; i++) {
			// вправо
			if (mesh[indexOfRow]?.[indexInRow + i] === symbol) {
				winCells++;
			} else {
				break;
			}
		}

		max_val = cellsForWin + 1 - winCells;
		for (let i = 1; i < max_val; i++) {
			// влево
			if (mesh[indexOfRow]?.[indexInRow - i] === symbol) {
				winCells++;
			} else {
				break;
			}
		}

		return winCells >= cellsForWin;
	};

	const allCheckers = [isDiagonalWin, isVerticalWin, isHorizontalWin];

	const [isWin, setIsWin] = useState(false);

	const checkWin = (indexOfRow, indexInRow, whoMoves, cellsForWin) => {
		const args = [indexOfRow, indexInRow, whoMoves, cellsForWin];
		// я бы использовал остаточные параметры, но тогда со стороны было бы не понятно какие именно аргументы нужны для работы функции
		// const diagonal = isDiagonalWin(...args);
		// const vertical = isVerticalWin(...args);
		// const horisontal = isHorizontalWin(...args);
		let result = allCheckers.some((el) => el(...args));
		setIsWin(result);
		return result;
	};

	return [isWin, checkWin];
};
