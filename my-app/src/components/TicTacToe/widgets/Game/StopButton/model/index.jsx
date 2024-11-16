import { store } from "../../../../store";
import { useNavigate, useBlocker } from "react-router-dom";

export const StopButtonModel = ({ Layout }) => {
	const navigate = useNavigate();
	const stopTheGame = () => {
		store.dispatch({ type: "RESET" });
		navigate("/tictactoe");
	};

	useBlocker(
		() => {
			return !window.confirm("The game will be reset.\nDo you want to exit?");
		},
		() => {
			const { isWin, isOverflow } = store.getState();
			return isWin || isOverflow;
		},
	);

	return <Layout stopTheGame={stopTheGame} />;
};
