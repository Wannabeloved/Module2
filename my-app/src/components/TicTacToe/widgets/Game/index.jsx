import { GameField } from "./GameField/GameField";
import { StopButton } from "./StopButton";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { isGameOnSelector } from "./../../redux-selectors/isGameOnSelector";

export const Game = () => {
	const navigate = useNavigate();
	const isGameOn = useSelector(isGameOnSelector);
	useEffect(() => {
		if (!isGameOn) navigate("/tictactoe/settings");
	}, []);
	return (
		<>
			<article>
				<GameField />
			</article>
			<StopButton />
		</>
	);
};
