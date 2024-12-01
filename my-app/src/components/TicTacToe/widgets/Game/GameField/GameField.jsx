import { Component } from "react";
import { connect } from "react-redux";

import withRouter from "../../../../../app/router/withRouter";

import { columnsSelector } from "../../../redux-selectors/columnsSelector";
import { meshSelector } from "../../../redux-selectors/meshSelector";

import { PlayerSymbol } from "../../../entities/PlayerSymbol/PlayerSymbol";
import { GameFieldLayout } from "./GameFieldLayout";

import { move as moveAction } from "../../../../../store/actions";

export class GameFieldContainer extends Component {
	onMove = (indexOfRow, indexInRow) => {
		this.props.dispatch(moveAction({ indexOfRow, indexInRow }));
	};
	render() {
		const { columns, mesh } = this.props;
		const PlayerSVG = ({ indexOfRow, indexInRow }) => {
			return <PlayerSymbol currentSymbol={mesh[indexOfRow][indexInRow]} />;
		};
		return (
			<GameFieldLayout
				PlayerSVG={PlayerSVG}
				onMove={this.onMove}
				columns={columns}
				mesh={mesh}
			/>
		);
	}
}

export const GameField = connect(mapStateToProps)(
	withRouter(GameFieldContainer),
);
function mapStateToProps(state) {
	return {
		columns: columnsSelector(state),
		mesh: meshSelector(state),
	};
}

// export const GameField = () => {
// 	const columns = useSelector(columnsSelector);
// 	const mesh = useSelector(meshSelector);

// 	const dispatch = useDispatch();

// 	const PlayerSVG = ({ indexOfRow, indexInRow }) => {
// 		return <PlayerSymbol currentSymbol={mesh[indexOfRow][indexInRow]} />;
// 	};

// 	const onMove = (indexOfRow, indexInRow) => {
// 		dispatch(move({ indexOfRow, indexInRow }));
// 	};

// 	return (
// 		<GameFieldLayout
// 			PlayerSVG={PlayerSVG}
// 			onMove={onMove}
// 			columns={columns}
// 			mesh={mesh}
// 		/>
// 	);
// };
