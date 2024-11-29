import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

import styles from "./index.module.css";

import { useRef } from "react";
export const Search = ({ setSubstringToSearch }) => {
	const inputRef = useRef(null);
	const getInputValue = () => {
		return inputRef.current.value;
	};
	return (
		<section className={styles.container}>
			<SearchInput inputRef={inputRef}></SearchInput>
			<SearchButton
				getInputValue={getInputValue}
				setSubstringToSearch={setSubstringToSearch}
			></SearchButton>
		</section>
	);
};
