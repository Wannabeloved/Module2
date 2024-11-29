import { PlayerSymbol } from "../../../entities/PlayerSymbol/PlayerSymbol";
import { GameFieldLayout } from "./GameFieldLayout";

import { useSelector } from "react-redux";

import { columnsSelector } from "../../../redux-selectors/columnsSelector";
import { meshSelector } from "../../../redux-selectors/meshSelector";

import { useDispatch } from "react-redux";
import { move } from "../../../../../store/actions";

export const GameField = () => {
	const columns = useSelector(columnsSelector);
	const mesh = useSelector(meshSelector);

	const dispatch = useDispatch();

	const PlayerSVG = ({ indexOfRow, indexInRow }) => {
		return <PlayerSymbol currentSymbol={mesh[indexOfRow][indexInRow]} />;
	};

	const onMove = (indexOfRow, indexInRow) => {
		dispatch(move({ indexOfRow, indexInRow }));
	};

	return (
		<GameFieldLayout
			PlayerSVG={PlayerSVG}
			onMove={onMove}
			columns={columns}
			mesh={mesh}
		/>
	);
};
