import styles from "./index.module.css";

export const SearchInput = ({ inputRef }) => {
	return (
		<input
			className={styles.input}
			placeholder="Search"
			type="text"
			ref={inputRef}
		/>
	);
};
