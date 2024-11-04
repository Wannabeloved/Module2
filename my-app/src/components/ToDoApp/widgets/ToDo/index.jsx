import { ToDo as ToDoEntity } from "../../entities/ToDo";

import { EditButton } from "./Buttons/EditButton";
import { SaveButton } from "./Buttons/SaveButton";
import { RemoveButton } from "./Buttons/RemoveButton";
import { Completed } from "./Buttons/Completed";

export const ToDo = ({
	todoInfo,
	setSomethingIsEditing,
	Buttons: { CancelCreateButton, ConfirmCreateButton },
	deleteToDoFromList,
	getToDoById,
}) => {
	const { id, title, isCompleted, isNew, createdAt } = todoInfo;
	console.warn("todoInfo:: ", todoInfo);

	const editButton = ({ setIsEditing }) => (
		<EditButton
			setIsEditing={setIsEditing}
			setSomethingIsEditing={setSomethingIsEditing}
		/>
	);

	const saveButton = ({ setIsEditing, titleRef, isCompleted }) => {
		console.warn("createdAt::!!!!!", createdAt);
		return (
			<SaveButton
				setSomethingIsEditing={setSomethingIsEditing}
				{...{ setIsEditing, id, titleRef, isCompleted, createdAt }}
			/>
		);
	};
	const removeButton = () => {
		return <RemoveButton removeToDo={deleteToDoFromList} id={id} />;
	};
	const completed = ({ isCurrentCompleted, setIsCurrentCompleted }) => {
		return (
			<Completed
				isCurrentCompleted={isCurrentCompleted}
				setIsCurrentCompleted={setIsCurrentCompleted}
				otherCardInfo={{ id, title, createdAt }}
			/>
		);
	};

	const cancelCreateButton = () => {
		return <CancelCreateButton />;
	};
	const confirmCreateButton = ({ titleRef, isCurrentCompleted }) => {
		console.warn("createdAt::!!!!!", createdAt);
		return (
			<ConfirmCreateButton
				titleRef={titleRef}
				isCurrentCompleted={isCurrentCompleted}
				createdAt={createdAt}
			/>
		);
	};

	return (
		<ToDoEntity
			todoInfo={todoInfo} //  id, title, isCompleted, isNew, createdAt
			buttons={{
				EditButton: editButton,
				SaveButton: saveButton,
				RemoveButton: removeButton,
				ConfirmCreateButton: confirmCreateButton,
				CancelCreateButton: cancelCreateButton,
				Completed: completed,
			}}
			getToDoById={getToDoById}
		/>
	);
};
