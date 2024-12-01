import { Component } from "react";

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
				<div
					className={`
					w-96 
					h-64 
					rounded-3xl
					bg-zinc-400 
					text-center 
					content-center
					flex
					flex-col
					items-center
					justify-evenly
				`}
				>
					<div>
						<h6
							className={`
								m-0
								mb-2
								font-semibold
							`}
						>
							Количество колонок:
						</h6>
						<div
							className={`
								flex 
								flex-row 
								justify-evenly
								gap-2
							`}
						>
							{setColumnsButtons.map((num) => {
								return (
									<SetColumnsButton key={`${num}`}>{num}</SetColumnsButton>
								);
							})}
						</div>
					</div>
					<div
						className={`
						flex
						flex-row
						gap-2
					`}
					>
						<h6
							className={`
								m-0
								mb-2
								font-semibold
							`}
						>
							Ходов в ряд для победы:{" "}
						</h6>
						<Select
							className={`
								p-1
								w-fit
								h-fit
								bg-gray-950
								hover:bg-zinc-800
								rounded-md
								text-cyan-200
							`}
						>
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
