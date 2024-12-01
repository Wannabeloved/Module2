import { Component } from "react";
import { connect } from "react-redux";

import { isWinSelector } from "../../../../redux-selectors/isWinSelector";
import { whoMovesSelector } from "../../../../redux-selectors/whoMovesSelector";

import { EndgameInformationLayout } from "./EndgameInformationLayout";

export class EndgameInformationContainer extends Component {
	render() {
		const { isWin, whoMoves } = this.props;
		let text = isWin ? `Выиграл: ${whoMoves}` : `Ничья`;
		return <EndgameInformationLayout text={text} />;
	}
}
export const EndgameInformation = connect(mapStateToProps)(
	EndgameInformationContainer,
);
function mapStateToProps(state) {
	return {
		isWin: isWinSelector(state),
		whoMoves: whoMovesSelector(state),
	};
}

// export const EndgameInformation = () => {
// 	const isWin = useSelector(isWinSelector);
// 	const whoMoves = useSelector(whoMovesSelector);

// 	let text = isWin ? `Выиграл: ${whoMoves}` : `Ничья`;
// 	return <EndgameInformationLayout text={text} />;
// };
