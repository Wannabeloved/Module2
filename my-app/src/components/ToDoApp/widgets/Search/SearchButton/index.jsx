import styles from "./index.module.css";

export const SearchButton = ({ setSubstringToSearch, getInputValue }) => {
	const onSearch = () => setSubstringToSearch(getInputValue());

	return (
		<button className={styles.button} onClick={onSearch}>
			Search
		</button>
	);
};
