import styles from "./index.module.css";

export const SearchButton = ({ setSubstringToSearch, inputState }) => {
	const handleSearch = () => {
		setSubstringToSearch(inputState);
	};
	return (
		<button className={styles.button} onClick={handleSearch}>
			Search
		</button>
	);
};
