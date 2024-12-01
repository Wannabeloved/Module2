import { Component } from "react";

export class SettingsInformationLayout extends Component {
	styles = {
		title: `
			m-0 
			text-lg 
			font-sans
			text-lg
			font-semibold
		`,
		value: `
			text-red-400 
			font-sans
			text-lg
			font-semibold
		`,
	};
	render() {
		const { columns, winLineCount } = this.props;
		return (
			<div
				className={`
					flex
					flex-row
					gap-6
					text-center
				`}
			>
				<div>
					<h6 className={this.styles.title}>Колонок</h6>
					<p className={this.styles.value}>{columns}</p>
				</div>
				<div>
					<h6 className={`${this.styles.title}`}>Максимум ходов</h6>
					<p className={`${this.styles.value} !text-cyan-500`}>
						{winLineCount}
					</p>
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
