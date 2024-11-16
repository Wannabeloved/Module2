import { store } from "../../../../store";
import { useNavigate, useBlocker } from "react-router-dom";

export const StopButtonModel = ({ Layout }) => {
	const navigate = useNavigate();
	const navigateToSettings = () => {
		navigate("/tictactoe");
	};

	const reset = () => {
		store.dispatch({ type: "RESET" });
		return false;
	};

	useBlocker(() => {
		const { isWin, isOverflow } = store.getState();
		if (
			isWin ||
			isOverflow ||
			window.confirm("The game will be reset.\nDo you want to exit?")
		)
			return reset();
		return true;
	});

	return <Layout stopTheGame={navigateToSettings} />;
};
