import { useState } from "react";

import { useGetToDo } from "../../../features/getToDo";
import { useCreateToDo } from "../../../features/createToDo";
import { useEditToDo } from "../../../features/editToDo";
import { useRemoveToDo } from "../../../features/removeToDo";
import { CancelCreateButton } from "./../../ToDo/Buttons/CancelCreateButton";
import { ConfirmCreateButton } from "../../ToDo/Buttons/ConfirmCreateButton";

export const ToDoListModel = ({
	ToDoListLayout,
	buttons: { SortButton, CreateButton },
	Search,
	ToDo,
}) => {
	console.log("IM RENDER!");
	const [list, setList] = useState([]);
	const [somethingIsEditing, setSomethingIsEditing] = useState(false);

	const {
		isNeedToSortAlphabet,
		setIsNeedToSortAlphabet,
		setSubstringToSearch,
	} = useGetToDo(setList);
	const { addNewToDo, sendToDB, cancelCreate, changeNewToDoRef } =
		useCreateToDo(setList, setSomethingIsEditing);
	const { editToDo } = useEditToDo();
	const { removeToDo } = useRemoveToDo(setList, deleteToDoFromList);

	function addToDoToList(toDo) {
		setList((prev) => {
			return [[...toDo], ...prev];
		});
	}
	function deleteToDoFromList(id) {
		setList((prev) => {
			let newVal = prev.toSpliced(
				prev.findIndex((el) => el[0] === id),
				1,
			);
			return [...newVal];
		});
	}

	const search = () => {
		return <Search setSubstringToSearch={setSubstringToSearch} />;
	};

	const sortButton = () => {
		return (
			<SortButton
				isNeedToSortAlphabet={isNeedToSortAlphabet}
				setIsNeedToSortAlphabet={setIsNeedToSortAlphabet}
			/>
		);
	};
	const createButton = () => {
		return (
			<CreateButton
				addNewToDo={addNewToDo}
				somethingIsEditing={somethingIsEditing}
			/>
		);
	};
	const cancelCreateButton = ({ setIsEditing }) => {
		return (
			<CancelCreateButton
				cancelCreate={cancelCreate}
				setIsEditing={setIsEditing}
			/>
		);
	};
	const confirmCreateButton = ({ titleRef, isCurrentCompleted, createdAt }) => {
		return (
			<ConfirmCreateButton
				functions={{ sendToDB }}
				titleRef={titleRef}
				isCurrentCompleted={isCurrentCompleted}
				setSomethingIsEditing={setSomethingIsEditing}
				createdAt={createdAt}
			/>
		);
	};

	return (
		<ToDoListLayout
			Search={search}
			list={list}
			setSubstringToSearch={setSubstringToSearch}
			forList={{ addToDoToList, deleteToDoFromList }}
			forCreate={{ sendToDB, cancelCreate, changeNewToDoRef }}
			forRemove={{ removeToDo }}
			forEdit={{ editToDo }}
			somethingIsEditing={somethingIsEditing}
			setSomethingIsEditing={setSomethingIsEditing}
			buttons={{
				SortButton: sortButton,
				CreateButton: createButton,
			}}
			ToDoButtons={{
				CancelCreateButton: cancelCreateButton,
				ConfirmCreateButton: confirmCreateButton,
			}}
			ToDo={ToDo}
		/>
	);
};
