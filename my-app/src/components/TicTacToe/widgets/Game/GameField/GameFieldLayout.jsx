import { Component } from "react";
import PropTypes from "prop-types";

export class GameFieldLayout extends Component {
	static propTypes = {
		mesh: PropTypes.array,
		columns: PropTypes.number,
		onMove: PropTypes.func,
		PlayerSVG: PropTypes.func,
	};
	styles = {
		item: `
			content-center
			text-center
			w-40 
			h-40 
			p-0
		`,
		borderTop: `
			border-t-2
			border-solid
			border-gray-400
		`,
		borderLeft: `
			border-l-2
			border-solid
			border-gray-400
		`,
	};
	render() {
		const { columns, PlayerSVG, onMove, mesh } = this.props;
		return (
			<>
				<div id="TicTacToe">
					<table className="border-collapse">
						<tbody>
							{mesh.map((row, ir) => (
								<tr
									className={`${this.styles.item}  ${ir !== 0 && this.styles.borderTop}`}
									key={`row index: ${ir}`}
								>
									{row.map((el, ic) => {
										const key = ir * columns + ic;
										return (
											<td
												className={`${this.styles.item} ${ic !== 0 && this.styles.borderLeft}`}
												onClick={() => onMove(ir, ic)}
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
