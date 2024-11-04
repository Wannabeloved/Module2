export const CompletedModel = ({
	isCurrentCompleted,
	setIsCurrentCompleted,
	editToDo,
	CompletedLayout,
	otherCardInfo: { id, title, createdAt },
}) => {
	console.warn("id, title, createdAt::", id, title, createdAt);
	function changeState(id, title, createdAt) {
		return (isCompleted) => {
			editToDo(id, { title, createdAt, isCompleted: isCompleted });
		};
	}
	const fixator = changeState(id, title, createdAt);
	function handleCompleted() {
		setIsCurrentCompleted((prevState) => {
			if (prevState && !window.confirm("Are you sure?")) {
				return prevState;
			}
			fixator(!prevState);
			return !prevState;
		});
	}
	return (
		<CompletedLayout
			handleCompleted={handleCompleted}
			isCurrentCompleted={isCurrentCompleted}
		/>
	);
};
