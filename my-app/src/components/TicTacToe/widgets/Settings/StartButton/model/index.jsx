import { Component } from "react";
import { connect } from "react-redux";
import withRouter from "../../../../../../app/router/withRouter";

import { START_NEW_GAME } from "./../../../../../../store/actions";

export class StartButtonModelContainer extends Component {
	render() {
		const { Layout, dispatch, navigate } = this.props;
		const startGame = () => {
			dispatch(START_NEW_GAME);
			navigate("/tictactoe/game");
		};
		return <Layout startGame={startGame}>start</Layout>;
	}
}
export const StartButtonModel = connect()(
	withRouter(StartButtonModelContainer),
);

// export const StartButtonModel = ({ Layout }) => {
// 	const navigate = useNavigate();
// 	const dispatch = useDispatch();
// 	const startGame = () => {
// 		dispatch(START_NEW_GAME);
// 		navigate("/tictactoe/game");
// 	};
// 	return <Layout startGame={startGame}>start</Layout>;
// };
