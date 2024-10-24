export const ConfirmCreateButtonModel = ({
	sendToDB,
	titleRef,
	isCurrentCompleted,
	ConfirmCreateButtonLayout,
	createdAt,
}) => {
	function handleConfirmCreate() {
		sendToDB({
			title: titleRef.current.textContent,
			isCompleted: isCurrentCompleted,
			createdAt,
		});
	}

	return (
		<ConfirmCreateButtonLayout handleConfirmCreate={handleConfirmCreate} />
	);
};
