import styles from "./index.module.css";
export const SortButton = ({
	setIsNeedToSortAlphabet,
	isNeedToSortAlphabet,
}) => {
	return (
		<button
			className={styles.button}
			onClick={() => {
				setIsNeedToSortAlphabet((isNeed) => !isNeed);
			}}
		>
			{isNeedToSortAlphabet ? "Sort by createdAt" : "Sort by alphabet"}
		</button>
	);
};
