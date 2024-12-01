import { Component } from "react";
import { connect } from "react-redux";

import { withBlocker } from "../withBlocker";
import withRouter from "../../../../../../app/router/withRouter";

import { isWinSelector } from "./../../../../redux-selectors/isWinSelector";
import { isOverflowSelector } from "./../../../../redux-selectors/isOverflowSelector";
import { movesCountSelector } from "./../../../../redux-selectors/movesCountSelector";

class StopButtonModelContainer extends Component {
	navigateToSettings() {
		this.props.navigate("/tictactoe");
	}
	confirm() {
		return window.confirm("The game will be reset.\nDo you want to exit?");
	}
	componentWillUnmount() {
		this.props.unblock();
	}
	render() {
		const { Layout } = this.props;
		return <Layout stopTheGame={this.navigateToSettings.bind(this)} />;
	}
}

export const StopButtonModel = connect(mapStateToProps)(
	withRouter(withBlocker(StopButtonModelContainer)),
);
function mapStateToProps(state) {
	return {
		isWin: isWinSelector(state),
		isOverflow: isOverflowSelector(state),
		movesCount: movesCountSelector(state),
	};
}

// export const StopButtonModel = ({ Layout }) => {
// 	const navigate = useNavigate();
// 	const navigateToSettings = () => {
// 		navigate("/tictactoe");
// 	};

// 	const confirm = () =>
// 		window.confirm("The game will be reset.\nDo you want to exit?");

// 	const dispatch = useDispatch();

// 	const isWin = useSelector(isWinSelector);
// 	const isOverflow = useSelector(isOverflowSelector);
// 	const movesCount = useSelector(movesCountSelector);
// 	useBlocker(() => {
// 		if (isWin || isOverflow || movesCount === 0 || confirm()) {
// 			dispatch(STOP_THE_GAME);
// 			return false;
// 		}
// 		return true;
// 	});

// 	return <Layout stopTheGame={navigateToSettings} />;
// };
