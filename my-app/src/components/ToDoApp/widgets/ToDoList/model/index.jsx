import { useState } from "react";

import { useConnectWithDB } from "../../../features/connectWithDB";
import { useCreateToDo } from "../../../features/createToDo";
import { useEditToDo } from "../../../features/editToDo";
import { useRemoveToDo } from "../../../features/removeToDo";

import { useContext } from "react";
import { ToDoListContext } from "../../../contexts/ToDoListContext";

export const ToDoListModel = ({
	ToDoListLayout,
	buttons: { SortButton, CreateButton },
	Search,
	ToDo,
	children,
}) => {
	const { list, setList } = useContext(ToDoListContext);
	console.warn("list is rendered:: ", list);
	const [somethingIsEditing, setSomethingIsEditing] = useState(false);

	const {
		isNeedToSortAlphabet,
		setIsNeedToSortAlphabet,
		setSubstringToSearch,
	} = useConnectWithDB(setList);

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
			ToDo={ToDo}
		>
			{children}
		</ToDoListLayout>
	);
};
