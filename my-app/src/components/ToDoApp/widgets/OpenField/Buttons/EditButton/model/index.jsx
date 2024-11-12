export const EditButtonModel = ({ setIsEditing, EditButtonLayout }) => {
	const handleEdit = () => {
		setIsEditing(true);
	};
	return <EditButtonLayout handleEdit={handleEdit} />;
};
