import { Component } from "react";

export class EndgameInformationLayout extends Component {
	render() {
		const { text } = this.props;
		return (
			<>
				<div
					className={`
						w-52
						h-36
						bg-gray-500
						rounded-3xl
						border-2
						border-solid
						border-orange-400
						text-center
						content-center
					`}
				>
					{text}
				</div>
			</>
		);
	}
}

// export const EndgameInformationLayout = ({ text }) => {
// 	return (
// 		<>
// 			<div
// 				style={{
// 					width: "200px",
// 					height: "150px",
// 					backgroundColor: "grey",
// 					borderRadius: "2.3rem",
// 					border: "2px solid orange",
// 					textAlign: "center",
// 					alignContent: "center",
// 				}}
// 			>
// 				{text}
// 			</div>
// 		</>
// 	);
// };
