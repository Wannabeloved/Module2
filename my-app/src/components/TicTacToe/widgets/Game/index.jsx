import { GameField } from "./GameField/GameField";
import { StopButton } from "./StopButton";

import styles from "./index.module.css";

export const Game = () => {
	return (
		<>
			<article>
				<GameField />
			</article>
			<StopButton />
		</>
	);
};
