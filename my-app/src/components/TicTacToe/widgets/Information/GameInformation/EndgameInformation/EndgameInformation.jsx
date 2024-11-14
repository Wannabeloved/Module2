import PropTypes from "prop-types";

import { EndgameInformationLayout } from "./EndgameInformationLayout";
export const EndgameInformation = ({ whoWin, isWin }) => {
	EndgameInformation.propTypes = {
		whoWin: PropTypes.string,
	};

	let text = isWin ? `Выиграл: ${whoWin}` : `Ничья`;
	return <EndgameInformationLayout text={text} />;
};
