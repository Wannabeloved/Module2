import { Component } from "react";

import { SettingsInformationLayout } from "./SettingsInformationLayout";

import { connect } from "react-redux";

import { columnsSelector } from "../../../redux-selectors/columnsSelector";
import { winLineCountSelector } from "../../../redux-selectors/winLineCountSelector";

export class SettingsInformationContainer extends Component {
	render() {
		const { columns, winLineCount } = this.props;
		return (
			<SettingsInformationLayout
				columns={columns}
				winLineCount={winLineCount}
			/>
		);
	}
}
export const SettingsInformation = connect(mapStateToProps)(
	SettingsInformationContainer,
);
function mapStateToProps(state) {
	return {
		columns: columnsSelector(state),
		winLineCount: winLineCountSelector(state),
	};
}

// export const SettingsInformation = () => {
// 	const columns = useSelector(columnsSelector);
// 	const winLineCount = useSelector(winLineCountSelector);
// 	return (
// 		<SettingsInformationLayout columns={columns} winLineCount={winLineCount} />
// 	);
// };
