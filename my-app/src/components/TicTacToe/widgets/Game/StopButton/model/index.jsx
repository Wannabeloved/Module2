import { store } from "../../../../store";
import { useNavigate, useBlocker } from "react-router-dom";

export const StopButtonModel = ({ Layout }) => {
	const navigate = useNavigate();
	const navigateToSettings = () => {
		navigate("/tictactoe");
	};

	const confirm = () =>
		window.confirm("The game will be reset.\nDo you want to exit?");

	useBlocker(() => {
		const { isWin, isOverflow, movesCount } = store.getState();
		if (isWin || isOverflow || movesCount === 0 || confirm()) {
			store.dispatch({ type: "RESET" });
			return false;
		}
		return true;
	});

	return <Layout stopTheGame={navigateToSettings} />;
};
