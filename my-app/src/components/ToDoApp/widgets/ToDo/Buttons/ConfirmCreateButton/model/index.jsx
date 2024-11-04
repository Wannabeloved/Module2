export const ConfirmCreateButtonModel = ({
	sendToDB,
	titleRef,
	isCurrentCompleted,
	ConfirmCreateButtonLayout,
	createdAt,
	goToListPage,
}) => {
	function handleConfirmCreate() {
		sendToDB({
			title: titleRef.current.textContent,
			isCompleted: isCurrentCompleted,
			createdAt,
		});
		goToListPage();
	}

	return (
		<ConfirmCreateButtonLayout handleConfirmCreate={handleConfirmCreate} />
	);
};
