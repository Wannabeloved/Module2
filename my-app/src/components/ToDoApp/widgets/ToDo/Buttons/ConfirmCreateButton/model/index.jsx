import { useContext } from "react";
import { CurrentToDoContext } from "../../../../../contexts/CurrentToDoContext";

export const ConfirmCreateButtonModel = ({
	getTitle,
	sendToDB,
	handleClose,
	ConfirmCreateButtonLayout,
}) => {
	const { currentTask } = useContext(CurrentToDoContext);
	const handleConfirmCreate = () => {
		sendToDB({
			...currentTask,
			title: getTitle(),
		});
		handleClose();
	};

	return (
		<ConfirmCreateButtonLayout handleConfirmCreate={handleConfirmCreate} />
	);
};
