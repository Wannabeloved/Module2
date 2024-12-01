import { Component } from "react";
import { connect } from "react-redux";

import { isWinSelector } from "../../../redux-selectors/isWinSelector";
import { isOverflowSelector } from "../../../redux-selectors/isOverflowSelector";
import { isErrorSelector } from "../../../redux-selectors/isErrorSelector";

import { EndgameInformation } from "./EndgameInformation/EndgameInformation";
import { IngameInformation } from "./IngameInformation/IngameInformation";

class GameInformationContainer extends Component {
	render() {
		const { isWin, isOverflow, isError } = this.props;
		const isFinal = isWin || isOverflow;
		console.log("ISERROR IN GAME INFORMATION", isError);
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
		isError: isErrorSelector(state),
	};
}

// export const GameInformation = () => {
// 	const isWin = useSelector(isWinSelector);
// 	const isOverflow = useSelector(isOverflowSelector);

// 	const isFinal = isWin || isOverflow;

// 	return <>{isFinal ? <EndgameInformation /> : <IngameInformation />}</>;
// };
