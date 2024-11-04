export const RemoveButtonModel = ({
	remove,
	id,
	RemoveButtonLayout,
	goToListPage,
}) => {
	function handleRemove() {
		if (window.confirm("Are you sure?")) {
			remove(id);
			goToListPage();
		}
	}

	return <RemoveButtonLayout handleRemove={handleRemove} />;
};
