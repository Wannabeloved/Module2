import PropTypes from "prop-types";
import { GameField } from "./GameField/GameField";
import { Button } from "../../entities/Buttons/Button";

import styles from "./index.module.css";

export const Game = ({ mesh, onMove, currentColumns, stopTheGame }) => {
	Game.propTypes = {
		mesh: PropTypes.array,
		onMove: PropTypes.func,
		currentColumns: PropTypes.number,
		stopTheGame: PropTypes.func,
	};

	return (
		<>
			<div className={styles.main}>
				<GameField
					mesh={mesh}
					onMove={onMove}
					columns={currentColumns}
				></GameField>
			</div>
			<Button
				onClick={() => {
					stopTheGame();
				}}
			>
				stop
			</Button>
		</>
	);
};
