import { Component } from "react";
import { connect } from "react-redux";

import { movesCountSelector } from "../../../../redux-selectors/movesCountSelector";
import { isErrorSelector } from "../../../../redux-selectors/isErrorSelector";

import { IngameInformationLayout } from "./IngameInformationLayout";
import { ErrorInformation } from "../../ErrorInformation/ErrorInformation";

class IngameInformationContainer extends Component {
	render() {
		const { movesCount, isError } = this.props;
		return (
			<IngameInformationLayout
				movesCount={movesCount}
				isError={isError}
				ErrorInformation={ErrorInformation}
			/>
		);
	}
}
export const IngameInformation = connect(mapStateToProps)(
	IngameInformationContainer,
);
function mapStateToProps(state) {
	return {
		movesCount: movesCountSelector(state),
		isError: isErrorSelector(state),
	};
}

// export const IngameInformation = () => {
// 	const movesCount = useSelector(movesCountSelector);
// 	const isError = useSelector(isErrorSelector);

// 	return (
// 		<IngameInformationLayout
// 			movesCount={movesCount}
// 			isError={isError}
// 			ErrorInformation={ErrorInformation}
// 		/>
// 	);
// };
