import { GameField } from "./GameField/GameField";
import { StopButton } from "./StopButton";

import { store } from "../../store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import styles from "./index.module.css";
export const Game = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!store.getState().isGameOn) navigate("/tictactoe/settings");
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
