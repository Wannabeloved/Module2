import { Component } from "react";

import { SettingsField } from "./SettingsField/SettingsField";
import { StartButton } from "./StartButton";

export class Settings extends Component {
	render() {
		return (
			<>
				<SettingsField />
				<StartButton />
			</>
		);
	}
}

// export const Settings = () => {
// 	return (
// 		<>
// 			<SettingsField />
// 			<StartButton />
// 		</>
// 	);
// };
