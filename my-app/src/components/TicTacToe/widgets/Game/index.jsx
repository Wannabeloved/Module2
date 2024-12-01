import { Component } from "react";
import { connect } from "react-redux";

import withRouter from "../../../../app/router/withRouter";

import { isGameOnSelector } from "./../../redux-selectors/isGameOnSelector";

import { GameField } from "./GameField/GameField";
import { StopButton } from "./StopButton";

class GameContainer extends Component {
	componentDidMount() {
		if (!this.props.isGameOn) this.props.navigate("/tictactoe/settings");
	}
	render() {
		return (
			<>
				<article>
					<GameField />
				</article>
				<StopButton />
			</>
		);
	}
}
export const Game = connect(mapStateToProps)(withRouter(GameContainer));
function mapStateToProps(state) {
	return {
		isGameOn: isGameOnSelector(state),
	};
}

// export const Game = () => {
// 	const navigate = useNavigate();
// 	const isGameOn = useSelector(isGameOnSelector);
// 	useEffect(() => {
// 		if (!isGameOn) navigate("/tictactoe/settings");
// 	}, []);
// 	return (
// 		<>
// 			<article>
// 				<GameField />
// 			</article>
// 			<StopButton />
// 		</>
// 	);
// };
