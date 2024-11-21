export const checkOverflow = (cols, movesCount) => {
	let maxNumOfMoves = cols ** 2;

	return movesCount >= maxNumOfMoves;
	// а вернётся значение сразу после выполнения функции, что позволит использовать актуальное значение сразу
};
