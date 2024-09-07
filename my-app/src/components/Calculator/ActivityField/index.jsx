import styles from "./styles.module.css";
export const ActivityField = ({ write }) => {
	return (
		<div className={styles.activityField}>
			<button
				className={styles.activityButton}
				onClick={() => {
					write("+");
				}}
			>
				+
			</button>
			<button
				className={styles.activityButton}
				onClick={() => {
					write("-");
				}}
			>
				-
			</button>
			<button
				className={styles.activityButton}
				onClick={() => {
					write("=");
				}}
			>
				=
			</button>
		</div>
	);
};
