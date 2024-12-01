import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./GameField.module.css";

export class GameFieldLayout extends Component {
	constructor(props) {
		super(props);
		this.propTypes = {
			mesh: PropTypes.array,
			columns: PropTypes.number,
			onMove: PropTypes.func,
			PlayerSVG: PropTypes.func,
		};
	}
	render() {
		const { columns, PlayerSVG, onMove, mesh } = this.props;
		return (
			<>
				<div id="TicTacToe">
					<table
						style={{
							borderCollapse: "collapse",
						}}
					>
						<tbody>
							{mesh.map((row, ir) => (
								<tr
									className={`${styles.item} ${ir !== 0 ? `${styles.borderTop}` : ""}`}
									key={`row index: ${ir}`}
								>
									{row.map((el, ic) => {
										const key = ir * columns + ic;
										return (
											<td
												className={`${styles.item} ${ic !== 0 ? `${styles.borderLeft}` : ""}`}
												onClick={(e) => onMove(ir, ic)}
												key={`element: ${key}`}
											>
												<PlayerSVG indexOfRow={ir} indexInRow={ic} />
											</td>
										);
									})}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</>
		);
	}
}

// export const GameFieldLayout = ({ columns, PlayerSVG, onMove, mesh }) => {

// 	return (
// 		<>
// 			<div id="TicTacToe">
// 				<table
// 					style={{
// 						borderCollapse: "collapse",
// 					}}
// 				>
// 					<tbody>
// 						{mesh.map((row, ir) => (
// 							<tr
// 								className={`${styles.item} ${ir !== 0 ? `${styles.borderTop}` : ""}`}
// 								key={`row index: ${ir}`}
// 							>
// 								{row.map((el, ic) => {
// 									const key = ir * columns + ic;
// 									return (
// 										<td
// 											className={`${styles.item} ${ic !== 0 ? `${styles.borderLeft}` : ""}`}
// 											onClick={(e) => onMove(ir, ic)}
// 											key={`element: ${key}`}
// 										>
// 											<PlayerSVG indexOfRow={ir} indexInRow={ic} />
// 										</td>
// 									);
// 								})}
// 							</tr>
// 						))}
// 					</tbody>
// 				</table>
// 			</div>
// 		</>
// 	);
// };
