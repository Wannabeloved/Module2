import { InformationLayout } from "./InformationLayout";

import { GameInformation } from "./GameInformation";
import { SettingsInformation } from "./SettingsInformation/SettingsInformation";

import { useSelector } from "react-redux";
import { isGameOnSelector } from "../../redux-selectors/isGameOnSelector";

export const Information = () => {
	const isGameOn = useSelector(isGameOnSelector);

	return (
		<InformationLayout
			isGameOn={isGameOn}
			GameInformation={GameInformation}
			SettingsInformation={SettingsInformation}
		/>
	);
};
