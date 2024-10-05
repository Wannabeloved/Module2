import styles from "./SettingsField.module.css";
export const SettingsFieldLayout = ({
	SetColumnsButton,
	range,
	SetLineOption,
	currentColumns,
	Select,
}) => {
	let setColumnsButtons = []; // жалко нельзя тип указать(
	for (let i = range[0]; i <= range[1]; i++) {
		setColumnsButtons.push(i);
	}
	let setLineButtons = [];
	for (let i = 2; i <= currentColumns; i++) {
		setLineButtons.push(i);
	}

	return (
		// Я устал верстать босс
		<>
			<div className={styles.main}>
				<div>
					<h6 className={styles.title}>Количество колонок:</h6>
					<div className={styles.buttons}>
						{setColumnsButtons.map((num) => {
							return <SetColumnsButton key={`${num}`}>{num}</SetColumnsButton>;
						})}
					</div>
				</div>
				<div className={styles.flexRow}>
					<h6 className={styles.title}>Ходов в ряд для победы: </h6>
					<Select className={styles.select}>
						{setLineButtons.map((num) => (
							<option key={`${num}`} value={`${num}`}>
								{num}
							</option>
						))}
					</Select>
				</div>
			</div>
		</>
	);
};
