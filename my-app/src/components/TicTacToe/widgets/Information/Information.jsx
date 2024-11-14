import { InformationLayout } from "./InformationLayout";

import { GameInformation } from "./GameInformation";
import { SettingsInformation } from "./SettingsInformation/SettingsInformation";

import { store } from "../../store";

export const Information = () => {
	const { isGameOn } = store.getState();

	return (
		<InformationLayout
			isGameOn={isGameOn}
			GameInformation={GameInformation}
			SettingsInformation={SettingsInformation}
		/>
	);
};
