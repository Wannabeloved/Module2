export const isErrorSelector = (state) => {
	const isError = state.tictactoeState.isError;
	return isError;
};
