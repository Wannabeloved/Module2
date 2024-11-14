import { EndgameInformation } from "./EndgameInformation/EndgameInformation";
import { IngameInformation } from "./IngameInformation/IngameInformation";

import { store } from "../../../store";

export const GameInformation = () => {
	const { isFinal } = store.getState();
	return <>{isFinal ? <EndgameInformation /> : <IngameInformation />}</>;
};
