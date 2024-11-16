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

const checkers = [
	function isDiagonalWin(mesh, indexOfRow, indexInRow, symbol, cellsForWin) {
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
	},

	function isVerticalWin(mesh, indexOfRow, indexInRow, symbol, cellsForWin) {
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
	},
	function isHorizontalWin(mesh, indexOfRow, indexInRow, symbol, cellsForWin) {
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
	},
];

export const checkWin = createCheckWin(checkers);
function createCheckWin(allCheckers) {
	return (cellsForWin, mesh, indexOfRow, indexInRow, whoMoves) => {
		console.log("IN CHECKWIN:: ", {
			cellsForWin,
			mesh,
			indexOfRow,
			indexInRow,
			whoMoves,
		});
		const args = [mesh, indexOfRow, indexInRow, whoMoves, cellsForWin];
		let result = allCheckers.some((el) => el(...args));
		return result;
	};
}
