import styles from "./styles.module.css";

export const TitleLayout = ({ title, titleRef, isEditing }) => {
	return (
		<p
			className={styles.title}
			contentEditable={isEditing}
			ref={titleRef}
			style={{
				whiteSpace: "pre-wrap",
				outline: "none",
				wordBreak: "break-word",
				outline: "none",
			}}
		>
			{title || <span className={styles.plug}></span>}
		</p>
	);
};
