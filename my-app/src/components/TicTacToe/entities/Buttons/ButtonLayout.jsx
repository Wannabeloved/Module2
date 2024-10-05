import styles from "./Button.module.css";

export const ButtonLayout = ({ onClick, children }) => {
	return (
		<button
			onClick={() => {
				onClick();
			}}
			className={styles.main}
		>
			{children}
		</button>
	);
};
