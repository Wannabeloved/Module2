export const RemoveButtonModel = ({ remove, id, RemoveButtonLayout }) => {
	function handleRemove() {
		if (window.confirm("Are you sure?")) {
			remove(id);
		}
	}

	return <RemoveButtonLayout handleRemove={handleRemove} />;
};
