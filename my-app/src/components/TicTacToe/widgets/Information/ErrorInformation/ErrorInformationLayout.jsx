import { Component } from "react";
import styles from "./ErrorInformation.module.css";

export class ErrorInformationLayout extends Component {
	render() {
		return (
			<>
				<div
					className={`
						w-72
						h-36
						bg-orange-400
						rounded-3xl
						border-2
						border-solid
						border-red-500
						opacity-100
						${styles.animation}
					`}
					style={{
						padding: "0px 25px",
						textAlign: "center",
						alignContent: "center",
						color: "rgba(20, 20, 20, 0.932)",
					}}
				>
					<p>Вы не можете совершить ход в клетку, которая уже занята</p>
				</div>
			</>
		);
	}
}

// export const ErrorInformationLayout = () => {
// 	return (
// 		<>
// 			<div
// 				className={styles.main}
// 				style={{
// 					padding: "0px 25px",
// 					textAlign: "center",
// 					alignContent: "center",
// 					color: "rgba(20, 20, 20, 0.932)",
// 				}}
// 			>
// 				<p>Вы не можете совершить ход в клетку, которая уже занята</p>
// 			</div>
// 		</>
// 	);
// };
