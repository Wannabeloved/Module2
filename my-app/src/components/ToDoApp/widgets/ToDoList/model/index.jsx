import { useEffect, useState } from "react";
import { useGetListFromDB } from "../../../hooks/useGetListFromDB";

import { useSelector, useDispatch } from "react-redux";

import { listSelector } from "../../../selectors/listSelector";
import { somethingIsEditingSelector } from "../../../selectors/somethingIsEditingSelector";

import { setNewList as setNewListAction } from "../../../../../store/actions/ToDoApp/setNewList";

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

	const getSortedList = (list, isNeedToSortAlphabet) => {
		let sortedList = isNeedToSortAlphabet
			? list.sort(([, a], [, b]) => a.title.localeCompare(b.title))
			: list.sort(([, a], [, b]) => a.createdAt - b.createdAt);
		return sortedList;
	};

	const getFilteredlist = (
		(getFromListByTitle) => (list, substringToSearch) =>
			getFromListByTitle(list, substringToSearch)
	)(getFromListByTitle);

	const getFilteredSortedList = (
		(getFilteredlist, getSortedList) =>
		(substringToSearch, isNeedToSortAlphabet) =>
		(list) => {
			const filteredList = getFilteredlist(list, substringToSearch);
			return getSortedList(filteredList, isNeedToSortAlphabet);
		}
	)(getFilteredlist, getSortedList);

	const [isNeedToSortAlphabet, setIsNeedToSortAlphabet] = useState(false);
	const [substringToSearch, setSubstringToSearch] = useState("");

	useEffect(() => {
		const abort = listRequest(getList, (list) =>
			dispatch(setNewListAction(list)),
		);

		return () => {
			abort();
		};
	}, []);

	const search = () => {
		return <Search setSubstringToSearch={setSubstringToSearch} />;
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
			getFilteredSortedList={getFilteredSortedList}
			isNeedToSortAlphabet={isNeedToSortAlphabet}
			substringToSearch={substringToSearch}
			ToDo={ToDo}
		>
			{children}
		</ToDoListLayout>
	);
};
