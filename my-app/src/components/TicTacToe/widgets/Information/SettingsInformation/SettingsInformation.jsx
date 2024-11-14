import { SettingsInformationLayout } from "./SettingsInformationLayout";
import { useRerender } from "../../../hooks/useRerender";

import { store } from "../../../store";
export const SettingsInformation = () => {
	const { columns, winLineCount } = store.getState();
	const rerender = useRerender();
	store.subscribe(rerender);
	return (
		<SettingsInformationLayout columns={columns} winLineCount={winLineCount} />
	);
};
