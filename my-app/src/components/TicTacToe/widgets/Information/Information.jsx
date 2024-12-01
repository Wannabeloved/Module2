import { Component } from "react";

import { InformationLayout } from "./InformationLayout";

import { GameInformation } from "./GameInformation";
import { SettingsInformation } from "./SettingsInformation/SettingsInformation";

import { connect } from "react-redux";
import { isGameOnSelector } from "../../redux-selectors/isGameOnSelector";

class InformationContainer extends Component {
	render() {
		const { isGameOn } = this.props;
		return (
			<InformationLayout
				isGameOn={isGameOn}
				GameInformation={GameInformation}
				SettingsInformation={SettingsInformation}
			/>
		);
	}
}
export const Information = connect(mapStateToProps)(InformationContainer);
function mapStateToProps(state) {
	return {
		isGameOn: isGameOnSelector(state),
	};
}

// export const Information = () => {
// 	const isGameOn = useSelector(isGameOnSelector);

// 	return (
// 		<InformationLayout
// 			isGameOn={isGameOn}
// 			GameInformation={GameInformation}
// 			SettingsInformation={SettingsInformation}
// 		/>
// 	);
// };
