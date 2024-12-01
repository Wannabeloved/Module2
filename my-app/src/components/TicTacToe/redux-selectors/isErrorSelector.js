export const isErrorSelector = (state) => {
	const isError = state.tictactoeState.isError;
	console.log("isErrorSelector", isError);
	return isError;
};
