import styles from "./styles.module.css";
export const ToDoListLayout = ({
	Search,
	list,
	buttons: { SortButton, CreateButton },
	ToDo,
	children,
}) => {
	return (
		<>
			<article style={{ width: "100%" }}>
				<Search />
			</article>
			<article className={styles.container}>
				<div className={styles.buttonField}>
					<SortButton />
					<CreateButton />
				</div>
				<section className={styles.listField}>
					<ul className={styles.todoList}>
						{list?.map(([key, el]) => {
							const { title, isCompleted } = el;
							console.warn("el:: ", el);
							return (
								<ToDo key={key} taskInfo={{ id: key, title, isCompleted }} />
							);
						})}
					</ul>
				</section>
			</article>
			{children}
		</>
	);
};
