import { Component } from "react";
import styles from "./SettingsField.module.css";

export class SettingsFieldLayout extends Component {
	getSetColumnsButtons(columnsRange) {
		let setColumnsButtons = [];
		for (let i = columnsRange[0]; i <= columnsRange[1]; i++) {
			setColumnsButtons.push(i);
		}
		return setColumnsButtons;
	}
	getSetLineButtons(columnsRange, columns) {
		let setLineButtons = [];
		for (let i = columnsRange[0]; i <= columns; i++) {
			setLineButtons.push(i);
		}
		return setLineButtons;
	}
	render() {
		const { columnsRange, SetColumnsButton, Select, columns } = this.props;

		const setColumnsButtons = this.getSetColumnsButtons(columnsRange);
		const setLineButtons = this.getSetLineButtons(columnsRange, columns);
		return (
			<>
				<div className={styles.main}>
					<div>
						<h6 className={styles.title}>Количество колонок:</h6>
						<div className={styles.buttons}>
							{setColumnsButtons.map((num) => {
								return (
									<SetColumnsButton key={`${num}`}>{num}</SetColumnsButton>
								);
							})}
						</div>
					</div>
					<div className={styles.flexRow}>
						<h6 className={styles.title}>Ходов в ряд для победы: </h6>
						<Select className={styles.select}>
							{setLineButtons.map((num) => (
								<option key={`${num}`} value={num}>
									{num}
								</option>
							))}
						</Select>
					</div>
				</div>
			</>
		);
	}
}

// export const SettingsFieldLayout = ({
// 	columnsRange,
// 	SetColumnsButton,
// 	Select,
// 	columns,
// }) => {
// 	let setColumnsButtons = [];
// 	for (let i = columnsRange[0]; i <= columnsRange[1]; i++) {
// 		setColumnsButtons.push(i);
// 	}
// 	let setLineButtons = [];
// 	for (let i = columnsRange[0]; i <= columns; i++) {
// 		setLineButtons.push(i);
// 	}

// 	return (
// 		// Я устал верстать босс
// 		<>
// 			<div className={styles.main}>
// 				<div>
// 					<h6 className={styles.title}>Количество колонок:</h6>
// 					<div className={styles.buttons}>
// 						{setColumnsButtons.map((num) => {
// 							return <SetColumnsButton key={`${num}`}>{num}</SetColumnsButton>;
// 						})}
// 					</div>
// 				</div>
// 				<div className={styles.flexRow}>
// 					<h6 className={styles.title}>Ходов в ряд для победы: </h6>
// 					<Select className={styles.select}>
// 						{setLineButtons.map((num) => (
// 							<option key={`${num}`} value={num}>
// 								{num}
// 							</option>
// 						))}
// 					</Select>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
