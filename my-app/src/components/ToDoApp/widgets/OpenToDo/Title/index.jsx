import styles from "./Title.module.css";

export const Title = ({ title, isInEditingMode, titleRef }) => {
	// setInterval(() => {
	// 	if (isInEditingMode) console.log(titleRef.current?.textContent);
	// }, 1000);
	return (
		<p
			className={styles.texte}
			contentEditable={isInEditingMode}
			ref={titleRef}
			style={{
				whiteSpace: "pre-wrap",
				outline: "none",
				wordBreak: "break-word",
				outline: "none",
			}}
		>
			{title}
		</p>
	);
};
