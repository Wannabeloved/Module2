import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

import styles from "./index.module.css";

import { useState } from "react";
export const Search = ({ setSubstringToSearch }) => {
	const [inputState, setInputState] = useState("");
	return (
		<section className={styles.container}>
			<SearchInput
				inputState={inputState}
				setInputState={setInputState}
			></SearchInput>
			<SearchButton
				inputState={inputState}
				setSubstringToSearch={setSubstringToSearch}
			></SearchButton>
		</section>
	);
};
