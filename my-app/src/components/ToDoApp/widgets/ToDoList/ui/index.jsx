import styles from "./styles.module.css";
export const ToDoListLayout = ({
	Search,
	list,
	buttons: { SortButton, CreateButton },
	getFilteredSortedList,
	isNeedToSortAlphabet,
	substringToSearch,
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
						{getFilteredSortedList(
							substringToSearch,
							isNeedToSortAlphabet,
						)(list).map(([id, { title, completed }]) => {
							return <ToDo key={id} taskInfo={{ id, title, completed }} />;
						})}
					</ul>
				</section>
			</article>
			{children}
		</>
	);
};
