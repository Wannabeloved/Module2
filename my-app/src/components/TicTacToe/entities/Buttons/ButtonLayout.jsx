import { Component } from "react";
import styles from "./Button.module.css";

export class ButtonLayout extends Component {
	render() {
		const { onClick, children } = this.props;
		return (
			<button
				onClick={() => {
					onClick();
				}}
				className={styles.main}
			>
				{children}
			</button>
		);
	}
}

// export const ButtonLayout = ({ onClick, children }) => {
// 	return (
// 		<button
// 			onClick={() => {
// 				onClick();
// 			}}
// 			className={styles.main}
// 		>
// 			{children}
// 		</button>
// 	);
// };
