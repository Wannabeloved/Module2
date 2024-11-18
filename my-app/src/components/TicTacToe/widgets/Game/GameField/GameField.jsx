import { PlayerSymbol } from "../../../entities/PlayerSymbol/PlayerSymbol";
import { GameFieldLayout } from "./GameFieldLayout";

import { store } from "../../../store";
import { useRerender } from "./../../../hooks/useRerender";

export const GameField = () => {
	const { mesh, columns } = store.getState();
	console.log("mesh, columns:: ", mesh, columns);

	const rerender = useRerender();
	store.subscribe(() => {
		console.log("rerender");
		rerender();
	});

	const PlayerSVG = ({ indexOfRow, indexInRow }) => {
		return <PlayerSymbol currentSymbol={mesh[indexOfRow][indexInRow]} />;
	};

	const onMove = (indexOfRow, indexInRow) => {
		store.dispatch({ type: "MOVE", payload: { indexOfRow, indexInRow } });
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
