import styles from "./Title.module.css";

export const Title = ({ title, isInEditingMode, titleRef }) => {
	// setInterval(() => {
	// 	if (isInEditingMode) console.log(titleRef.current?.textContent);
	// }, 1000);
	return (
		<>
			<h6>Title: </h6>
			<p
				className={styles.texte}
				contentEditable={isInEditingMode}
				ref={titleRef}
			>
				{title}
			</p>
		</>
	);
};
