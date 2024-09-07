import styles from "./ScreenField.module.css";
export const ScreenField = ({ history, screen }) => {
	return (
		<div className={styles.field}>
			<div className={styles.screen}>
				<p
					id="history"
					style={{
						color: "gray",
					}}
				>
					{history.map((el) => el)}
				</p>
				<p id="current-expression">{screen}</p>
			</div>
		</div>
	);
};
