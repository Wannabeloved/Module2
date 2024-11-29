import { currentToDoSelector } from "../../../../../selectors/currentToDoSelector";
import { useSendToDB } from "../../../../../hooks/useSendToDB";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToDo as addToDoAction } from "../../../../../../../store/actions/ToDoApp/addToDo";
import { useReSetToDo } from "../../../../../hooks/useReSetToDo";

export const ConfirmCreateButtonModel = ({
	getTitle,
	handleClose,
	ConfirmCreateButtonLayout,
}) => {
	const currentTask = useSelector(currentToDoSelector);

	const dispatch = useDispatch();
	const sendToDB = useSendToDB();

	const resetToDo = useReSetToDo();

	const handleConfirmCreate = () => {
		const newToDo = {
			...currentTask,
			title: getTitle(),
			createdAt: new Date().getTime(),
		};
		delete newToDo.id;
		const sendToDoPromise = sendToDB(newToDo);
		dispatch(addToDoAction(newToDo));
		sendToDoPromise.then((res) => resetToDo(res));
		handleClose();
	};

	return (
		<ConfirmCreateButtonLayout handleConfirmCreate={handleConfirmCreate} />
	);
};
