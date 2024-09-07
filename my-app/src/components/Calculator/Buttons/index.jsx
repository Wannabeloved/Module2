import styles from "./ButtonField.module.css";
export const Button = ({ callback, slot }) => {
	return (
		<>
			<button className={styles.field} onClick={callback} key={slot}>
				{slot}
			</button>
		</>
	);
};
