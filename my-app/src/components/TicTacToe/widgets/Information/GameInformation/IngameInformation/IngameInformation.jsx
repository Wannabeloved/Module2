import { IngameInformationLayout } from "./IngameInformationLayout";
import { ErrorInformation } from "../../ErrorInformation/ErrorInformation";

import { useSelector } from "react-redux";

import { movesCountSelector } from "../../../../redux-selectors/movesCountSelector";
import { isErrorSelector } from "../../../../redux-selectors/isErrorSelector";

export const IngameInformation = () => {
	const movesCount = useSelector(movesCountSelector);
	const isError = useSelector(isErrorSelector);

	return (
		<IngameInformationLayout
			movesCount={movesCount}
			isError={isError}
			ErrorInformation={ErrorInformation}
		/>
	);
};
