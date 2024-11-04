import styles from "./styles.module.css";
export const ToDoListLayout = ({
	Search,
	list,
	forList: { addToDoToList, deleteToDoFromList },
	forCreate: { sendToDB, cancelCreate, changeNewToDoRef },
	forRemove: { removeToDo },
	forEdit: { editToDo },
	somethingIsEditing,
	setSomethingIsEditing,
	buttons: { SortButton, CreateButton },
	ToDoButtons: { CancelCreateButton, ConfirmCreateButton },
	ToDo,
	getToDoById,
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
							const { title, isCompleted, isNew, createdAt } = el;
							console.log("el:: ", el);
							return (
								<ToDo
									key={key}
									changeNewToDoRef={changeNewToDoRef}
									cancelCreate={cancelCreate}
									todoInfo={{
										id: key,
										title,
										isCompleted,
										isNew,
										createdAt,
									}}
									dbRequests={{
										sendToDB,
										editToDo,
										removeToDo,
									}}
									Buttons={{
										CancelCreateButton,
										ConfirmCreateButton,
									}}
									setSomethingIsEditing={setSomethingIsEditing}
									deleteToDoFromList={deleteToDoFromList}
									getToDoById={getToDoById}
								/>
							);
						})}
					</ul>
				</section>
			</article>
		</>
	);
};
