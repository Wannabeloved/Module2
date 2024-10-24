import styles from "./index.module.css";

export const SearchInput = (props) => {
	return (
		<input
			className={styles.input}
			placeholder="Search"
			type="text"
			value={props.inputState}
			onChange={(e) => props.setInputState(e.target.value)}
		/>
	);
};
