import { Component } from "react";
import styles from "./SettingsInformation.module.css";

export class SettingsInformationLayout extends Component {
	render() {
		const { columns, winLineCount } = this.props;
		return (
			<div className={styles.main}>
				<div>
					<h6 className={styles.title}>Колонок</h6>
					<p className={styles.value}>{columns}</p>
				</div>
				<div>
					<h6 className={styles.title}>Максимум ходов</h6>
					<p className={styles.value}>{winLineCount}</p>
				</div>
			</div>
		);
	}
}

// export const SettingsInformationLayout = ({ columns, winLineCount }) => {
// 	return (
// 		<div className={styles.main}>
// 			<div>
// 				<h6 className={styles.title}>Колонок</h6>
// 				<p className={styles.value}>{columns}</p>
// 			</div>
// 			<div>
// 				<h6 className={styles.title}>Максимум ходов</h6>
// 				<p className={styles.value}>{winLineCount}</p>
// 			</div>
// 		</div>
// 	);
// };
