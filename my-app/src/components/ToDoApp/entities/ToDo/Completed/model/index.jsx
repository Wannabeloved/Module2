export const CompletedModel = ({
	id,
	isCurrentCompleted,
	setIsCurrentCompleted,
	editToDo,
	createdAt,
	title,
	CompletedLayout,
}) => {
	function handleCompleted() {
		setIsCurrentCompleted((prevState) => {
			if (prevState && window.confirm("Are you sure?")) {
				editToDo(id, { title, createdAt, isCompleted: false });
				return false;
			}
			editToDo(id, { title, createdAt, isCompleted: true });
			return true;
		});
	}
	return (
		<CompletedLayout
			handleCompleted={handleCompleted}
			isCurrentCompleted={isCurrentCompleted}
		/>
	);
};
