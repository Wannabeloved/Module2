import { useDispatch } from "react-redux";
import { START_NEW_GAME } from "./../../../../../../store/actions";

import { useNavigate } from "react-router-dom";

export const StartButtonModel = ({ Layout }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const startGame = () => {
		dispatch(START_NEW_GAME);
		navigate("/tictactoe/game");
	};
	return <Layout startGame={startGame}>start</Layout>;
};
