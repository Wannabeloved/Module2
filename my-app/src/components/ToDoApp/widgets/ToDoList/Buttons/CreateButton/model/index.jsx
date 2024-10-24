export const CreateButtonModel = ({
	addNewToDo,
	somethingIsEditing,
	CreateButtonLayout,
}) => {
	const handleCreate = () => {
		if (!somethingIsEditing) {
			addNewToDo();
		}
	};

	return (
		<CreateButtonLayout onClick={handleCreate} disabled={somethingIsEditing} />
	);
};
