import { Component } from "react";
import { connect } from "react-redux";

import { isWinSelector } from "../../../redux-selectors/isWinSelector";
import { isOverflowSelector } from "../../../redux-selectors/isOverflowSelector";

import { EndgameInformation } from "./EndgameInformation/EndgameInformation";
import { IngameInformation } from "./IngameInformation/IngameInformation";

class GameInformationContainer extends Component {
	render() {
		const { isWin, isOverflow } = this.props;
		const isFinal = isWin || isOverflow;
		return <>{isFinal ? <EndgameInformation /> : <IngameInformation />}</>;
	}
}
export const GameInformation = connect(mapStateToProps)(
	GameInformationContainer,
);
function mapStateToProps(state) {
	return {
		isWin: isWinSelector(state),
		isOverflow: isOverflowSelector(state),
	};
}

// export const GameInformation = () => {
// 	const isWin = useSelector(isWinSelector);
// 	const isOverflow = useSelector(isOverflowSelector);

// 	const isFinal = isWin || isOverflow;

// 	return <>{isFinal ? <EndgameInformation /> : <IngameInformation />}</>;
// };
