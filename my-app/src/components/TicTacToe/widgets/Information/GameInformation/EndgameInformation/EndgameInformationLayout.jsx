import { Component } from "react";

export class EndgameInformationLayout extends Component {
	render() {
		const { text } = this.props;
		return (
			<>
				<div
					style={{
						width: "200px",
						height: "150px",
						backgroundColor: "grey",
						borderRadius: "2.3rem",
						border: "2px solid orange",
						textAlign: "center",
						alignContent: "center",
					}}
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
