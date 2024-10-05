import { PlayerSymbol } from "../../../entities/PlayerSymbol/PlayerSymbol";
import { GameFieldLayout } from "./GameFieldLayout";

import PropTypes from "prop-types";

export const GameField = ({ mesh, columns, onMove }) => {
	GameField.propTypes = {
		mesh: PropTypes.array,
		columns: PropTypes.number,
		onMove: PropTypes.func,
	};

	const PlayerSVG = ({ indexOfRow, indexInRow }) => {
		return <PlayerSymbol currentSymbol={mesh[indexOfRow][indexInRow]} />;
	};

	/*
	symbolsList[ mesh[Math.trunc(i / columns) ]?.[ Math.trunc(i % columns) ] ]
*/
	return (
		<>
			<GameFieldLayout
				PlayerSVG={PlayerSVG}
				onMove={onMove}
				columns={columns}
				mesh={mesh}
			></GameFieldLayout>
		</>
	);
};
