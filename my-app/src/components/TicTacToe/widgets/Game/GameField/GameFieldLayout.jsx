import PropTypes from "prop-types";
import styles from "./GameField.module.css";

export const GameFieldLayout = ({ columns, PlayerSVG, onMove, mesh }) => {
	GameFieldLayout.propTypes = {
		mesh: PropTypes.array,
		columns: PropTypes.number,
		onMove: PropTypes.func,
		PlayerSVG: PropTypes.func,
	};

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
											onClick={(e) => {
												onMove(ir, ic);
											}}
											key={`element: ${key}`}
										>
											{/* {playerSymbol(ir, ic)} */}
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
};
