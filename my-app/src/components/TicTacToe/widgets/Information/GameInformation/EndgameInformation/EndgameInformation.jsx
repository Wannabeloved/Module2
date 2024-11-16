import { EndgameInformationLayout } from "./EndgameInformationLayout";

import { store } from "../../../../store";

export const EndgameInformation = () => {
	const { whoMoves, isWin } = store.getState();

	let text = isWin ? `Выиграл: ${whoMoves}` : `Ничья`;
	return <EndgameInformationLayout text={text} />;
};
