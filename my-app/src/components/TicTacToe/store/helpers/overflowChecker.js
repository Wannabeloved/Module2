export const checkOverflow = (cols) => {
	let maxNumOfMoves = cols ** 2;

	return (movesCount) => movesCount >= maxNumOfMoves;
	// а вернётся значение сразу после выполнения функции, что позволит использовать актуальное значение сразу
};
