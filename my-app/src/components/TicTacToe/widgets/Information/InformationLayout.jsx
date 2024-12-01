import { Component } from "react";

export class InformationLayout extends Component {
	render() {
		const { isGameOn, GameInformation, SettingsInformation } = this.props;
		return <>{isGameOn ? <GameInformation /> : <SettingsInformation />}</>;
	}
}

// export const InformationLayout = ({
// 	isGameOn,
// 	GameInformation,
// 	SettingsInformation,
// }) => {
// 	return <>{isGameOn ? <GameInformation /> : <SettingsInformation />}</>;
// };
