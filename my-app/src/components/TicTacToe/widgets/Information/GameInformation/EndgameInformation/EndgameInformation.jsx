import { EndgameInformationLayout } from "./EndgameInformationLayout";

import { useSelector } from "react-redux";

import { isWinSelector } from "../../../../redux-selectors/isWinSelector";
import { whoMovesSelector } from "../../../../redux-selectors/whoMovesSelector";

export const EndgameInformation = () => {
	const isWin = useSelector(isWinSelector);
	const whoMoves = useSelector(whoMovesSelector);

	let text = isWin ? `Выиграл: ${whoMoves}` : `Ничья`;
	return <EndgameInformationLayout text={text} />;
};
