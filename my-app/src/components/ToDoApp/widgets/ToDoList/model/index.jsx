import { useEffect, useState } from "react";
import { useGetListFromDB } from "../../../hooks/useGetListFromDB";

import { useSelector, useDispatch } from "react-redux";

import { listSelector } from "../../../selectors/listSelector";
import { somethingIsEditingSelector } from "../../../selectors/somethingIsEditingSelector";

import { setNewList as setNewListAction } from "../../../../../store/actions/ToDoApp/setNewList";

import { addToDo as addToDoAction } from "../../../../../store/actions/ToDoApp/addToDo";
import { deleteToDo as deleteToDoAction } from "../../../../../store/actions/ToDoApp/deleteToDo";
import { editToDo as editToDoAction } from "../../../../../store/actions/ToDoApp/editToDo";

import { useGetFromListByTitle } from "../../../hooks/useGetFromListByTitle";

import { listRequest } from "../api/listRequest";

export const ToDoListModel = ({
	ToDoListLayout,
	buttons: { SortButton, CreateButton },
	Search,
	ToDo,
	children,
}) => {
	const list = useSelector(listSelector);
	const somethingIsEditing = useSelector(somethingIsEditingSelector);

	const getFromListByTitle = useGetFromListByTitle();

	const dispatch = useDispatch();

	const getList = useGetListFromDB();
	const setList = (list, isNeedToSortAlphabet) => {
		let sortedList = isNeedToSortAlphabet
			? list.sort((a, b) => a.title.localeCompare(b.title))
			: list;
		dispatch(setNewListAction(sortedList));
	};

	const setFilteredSortedList =
		(substringToSearch, isNeedToSortAlphabet) => (list) => {
			const filteredList = getFromListByTitle(list, substringToSearch);
			return setList(filteredList, isNeedToSortAlphabet);
		};

	const [isNeedToSortAlphabet, setIsNeedToSortAlphabet] = useState(false);
	const [substringToSearch, setSubstringToSearch] = useState("");

	useEffect(() => {
		const abort = listRequest(
			getList,
			setFilteredSortedList(substringToSearch, isNeedToSortAlphabet),
		);

		return () => {
			abort();
		};
	}, [isNeedToSortAlphabet, substringToSearch]);

	const addToDo = (toDo) => dispatch(addToDoAction(toDo));
	const editToDo = (id) => dispatch(editToDoAction(id));
	const deleteToDo = (id) => dispatch(deleteToDoAction(id));

	const search = () => {
		const onSearch = (substringToSearch) => {};
		return (
			<Search setSubstringToSearch={setSubstringToSearch} onSearch={onSearch} />
		);
	};

	const sortButton = () => (
		<SortButton
			isNeedToSortAlphabet={isNeedToSortAlphabet}
			setIsNeedToSortAlphabet={setIsNeedToSortAlphabet}
		/>
	);

	return (
		<ToDoListLayout
			Search={search}
			list={list}
			somethingIsEditing={somethingIsEditing}
			buttons={{
				SortButton: sortButton,
				CreateButton: CreateButton,
			}}
			ToDo={ToDo}
		>
			{children}
		</ToDoListLayout>
	);
};
