export const SaveButtonModel = ({
	setIsEditing,
	setSomethingIsEditing,
	editToDo,
	toDoInfo: { id, titleRef, isCompleted, createdAt },
	SaveButtonLayout,
}) => {
	const handleSave = () => {
		editToDo(id, {
			title: titleRef.current.textContent,
			isCompleted,
			createdAt,
		});
		setIsEditing(false);
		setSomethingIsEditing(false);
	};

	return <SaveButtonLayout handleSave={handleSave} />;
};
