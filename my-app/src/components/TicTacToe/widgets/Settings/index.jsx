import { SettingsField } from "./SettingsField/SettingsField";
import { Button } from "../../entities/Buttons/Button";

import PropTypes from "prop-types";

export const Settings = ({
	resetGame,
	setColumns,
	cellsCountRange,
	setWinLineCount,
	currentColumns,
	winLineCount,
}) => {
	Settings.propTypes = {
		resetGame: PropTypes.func,
		setColumns: PropTypes.func,
		cellsCountRange: PropTypes.arrayOf(PropTypes.number),
	};
	return (
		<>
			<SettingsField
				resetGame={resetGame}
				setColumns={setColumns}
				range={cellsCountRange}
				setWinLineCount={setWinLineCount}
				currentColumns={currentColumns}
				winLineCount={winLineCount}
			/>
			<Button
				onClick={() => {
					resetGame();
				}}
			>
				start
			</Button>
		</>
	);
};
