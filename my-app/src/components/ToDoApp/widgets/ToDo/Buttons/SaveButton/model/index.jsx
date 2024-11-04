export const SaveButtonModel = ({
	editToDo,
	toDoInfo: { id, titleRef, isCompleted, createdAt },
	SaveButtonLayout,
	setIsEditing,
	goToListPage,
}) => {
	const handleSave = () => {
		editToDo(id, {
			title: titleRef.current.textContent,
			isCompleted,
			createdAt,
		});
		setIsEditing(false);
	};

	return <SaveButtonLayout handleSave={handleSave} />;
};
