import { EndgameInformation } from "./EndgameInformation/EndgameInformation";
import { IngameInformation } from "./IngameInformation/IngameInformation";

import { store } from "../../../store";
import { useRerender } from "../../../hooks/useRerender";

export const GameInformation = () => {
	const { isWin, isOverflow } = store.getState();
	const isFinal = isWin || isOverflow;
	const rerender = useRerender();
	store.subscribe(rerender);

	return <>{isFinal ? <EndgameInformation /> : <IngameInformation />}</>;
};
