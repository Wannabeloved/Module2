import { EndgameInformation } from "./EndgameInformation/EndgameInformation";
import { IngameInformation } from "./IngameInformation/IngameInformation";

import { store } from "../../../store";
import { useRerender } from "../../../hooks/useRerender";

export const GameInformation = () => {
	const { isFinal } = store.getState();
	const rerender = useRerender();
	store.subscribe(rerender);

	return <>{isFinal ? <EndgameInformation /> : <IngameInformation />}</>;
};
