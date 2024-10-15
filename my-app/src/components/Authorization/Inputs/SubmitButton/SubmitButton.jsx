import styles from "./SubmitButton.module.css";
export const SubmitButton = () => {
	return (
		<div className={styles.btnContainer}>
			<div className={styles.btnWrap}>
				<div className={styles.btnBg}></div>
				<button type="submit" className={styles.btn}>
					Login
				</button>
			</div>
		</div>
	);
};
