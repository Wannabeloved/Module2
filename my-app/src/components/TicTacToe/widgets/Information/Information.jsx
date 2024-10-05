import PropTypes from "prop-types";

import { ErrorInformation } from "./ErrorInformation/ErrorInformation";
import { SettingsInformation } from "./SettingsInformation/SettingsInformation";
import { EndgameInformation } from "./EndgameInformation/EndgameInformation";

import { InformationLayout } from "./InformationLayout";

export const Information = ({
	isGameOn,
	whoMoves,
	isWin,
	isFinita,
	isError,
	movesCount,
	columns,
	cellsForWin,
}) => {
	Information.propTypes = {
		whoMoves: PropTypes.string,
		isFinita: PropTypes.bool,
		isError: PropTypes.bool,
		movesCount: PropTypes.number,
	};

	return (
		<InformationLayout>
			{isGameOn ? (
				isFinita ? (
					<EndgameInformation whoWin={whoMoves} isWin={isWin} />
				) : (
					<>
						<div>
							Ходов:
							<br />
							{movesCount}
						</div>
						{isError && (
							<ErrorInformation isFinita={isFinita} whoWin={whoMoves} />
						)}
					</>
				)
			) : (
				<SettingsInformation columns={columns} cellsForWin={cellsForWin} />
			)}
		</InformationLayout>
	);
};
