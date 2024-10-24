export const CancelCreateButtonModel = ({
	cancelCreate,
	CancelCreateButtonLayout,
}) => {
	function handleCancelCreate() {
		cancelCreate();
	}

	return <CancelCreateButtonLayout handleCancelCreate={handleCancelCreate} />;
};
