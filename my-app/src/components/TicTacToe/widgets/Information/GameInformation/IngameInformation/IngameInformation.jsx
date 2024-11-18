import { IngameInformationLayout } from "./IngameInformationLayout";
import { ErrorInformation } from "../../ErrorInformation/ErrorInformation";

import { store } from "../../../../store";

export const IngameInformation = () => {
	const { movesCount, isError } = store.getState();
	return (
		<IngameInformationLayout
			movesCount={movesCount}
			isError={isError}
			ErrorInformation={ErrorInformation}
		/>
	);
};
