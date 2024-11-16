import { store } from "../../../../store";

import { useNavigate } from "react-router-dom";

export const StartButtonModel = ({ Layout }) => {
	const navigate = useNavigate();
	const startGame = () => {
		store.dispatch({ type: "START_GAME" });
		navigate("/tictactoe/game");
	};
	return <Layout startGame={startGame}>start</Layout>;
};
