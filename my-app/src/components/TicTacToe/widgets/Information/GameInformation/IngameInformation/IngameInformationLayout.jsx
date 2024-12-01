import { Component } from "react";

export class IngameInformationLayout extends Component {
	render() {
		const { movesCount, isError, ErrorInformation } = this.props;
		return (
			<div className="relative flex h-36 text-center justify-center">
				<div className="self-center">
					Ходов:
					<br />
					{movesCount}
				</div>
				{isError && <ErrorInformation className="absolute" />}
			</div>
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
