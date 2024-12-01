import { Component } from "react";

export class IngameInformationLayout extends Component {
	render() {
		const { movesCount, isError, ErrorInformation } = this.props;
		return (
			<>
				<div>
					Ходов:
					<br />
					{movesCount}
				</div>
				{isError && <ErrorInformation />}
			</>
		);
	}
}

// export const IngameInformationLayout = ({
// 	movesCount,
// 	isError,
// 	ErrorInformation,
// }) => {
// 	return (
// 		<>
// 			<div>
// 				Ходов:
// 				<br />
// 				{movesCount}
// 			</div>
// 			{isError && <ErrorInformation />}
// 		</>
// 	);
// };
