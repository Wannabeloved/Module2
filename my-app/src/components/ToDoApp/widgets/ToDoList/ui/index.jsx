import styles from "./styles.module.css";
export const ToDoListLayout = ({
	Search,
	list,
	buttons: { SortButton, CreateButton },
	ToDo,
	children,
}) => {
	console.log(
		"list::",
		list.map(() => 1),
	);
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
						{console.log("LIST::", list)}
						{console.log("LIST.map::", list.map)}
						{list.map((el) => {
							const { id, title, isCompleted } = el;
							console.warn("el:: ", el);
							return <ToDo key={id} taskInfo={{ id, title, isCompleted }} />;
						})}
					</ul>
				</section>
			</article>
			{children}
		</>
	);
};
