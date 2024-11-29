import { SettingsInformationLayout } from "./SettingsInformationLayout";

import { useSelector } from "react-redux";

import { columnsSelector } from "../../../redux-selectors/columnsSelector";
import { winLineCountSelector } from "../../../redux-selectors/winLineCountSelector";

export const SettingsInformation = () => {
	const columns = useSelector(columnsSelector);
	const winLineCount = useSelector(winLineCountSelector);
	return (
		<SettingsInformationLayout columns={columns} winLineCount={winLineCount} />
	);
};
