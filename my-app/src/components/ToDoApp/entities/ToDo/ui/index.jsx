import styles from "./styles.module.css";

export const ToDoLayout = ({ taskInfo }) => {
	const { title, completed } = taskInfo;

	return (
		<article
			className={styles.container}
			style={{ "--extra-width-color": completed ? "#77dd77" : "#E4717A" }}
		>
			<article className={styles.todo}>
				<h5 className={styles.title}>{title}</h5>

				<section>
					<h6 className={styles.completedText}>Completed:</h6>
					<p className={styles.completedText}>{` ${completed}`}</p>
				</section>
			</article>
		</article>
	);
};
