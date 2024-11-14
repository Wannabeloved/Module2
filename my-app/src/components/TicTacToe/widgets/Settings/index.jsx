import { SettingsField } from "./SettingsField/SettingsField";
import { Button } from "../../entities/Buttons/Button";

import { store } from "../../store";

export const Settings = () => {
	return (
		<>
			<SettingsField />
			<Button onClick={() => store.dispatch({ type: "START_GAME" })}>
				start
			</Button>
		</>
	);
};
