import { EndgameInformation } from "./EndgameInformation/EndgameInformation";
import { IngameInformation } from "./IngameInformation/IngameInformation";

import { useSelector } from "react-redux";

import { isWinSelector } from "../../../redux-selectors/isWinSelector";
import { isOverflowSelector } from "../../../redux-selectors/isOverflowSelector";

export const GameInformation = () => {
	const isWin = useSelector(isWinSelector);
	const isOverflow = useSelector(isOverflowSelector);

	const isFinal = isWin || isOverflow;

	return <>{isFinal ? <EndgameInformation /> : <IngameInformation />}</>;
};
