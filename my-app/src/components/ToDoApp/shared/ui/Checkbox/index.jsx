import styles from "./styles.module.css";
export const Checkbox = ({ onChange, checked, className }) => {
	return (
		<section className={styles.checkbox}>
			<label className={styles.container}>
				Completed:
				<input
					type="checkbox"
					className={`${styles.input} ${className}`}
					checked={checked}
					onChange={onChange}
				/>
			</label>
		</section>
	);
};
