import { InformationLayout } from "./InformationLayout";

import { GameInformation } from "./GameInformation";
import { SettingsInformation } from "./SettingsInformation/SettingsInformation";

import { store } from "../../store";
import { useRerender } from "../../hooks/useRerender";

export const Information = () => {
	const { isGameOn } = store.getState();
	const rerender = useRerender();
	store.subscribe(rerender);
	console.log("IS GAME ON:: ", isGameOn);

	return (
		<InformationLayout
			isGameOn={isGameOn}
			GameInformation={GameInformation}
			SettingsInformation={SettingsInformation}
		/>
	);
};
