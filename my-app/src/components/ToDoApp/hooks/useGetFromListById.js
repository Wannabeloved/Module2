export const useGetFromListById = () => {
	return (list, id) => {
		console.warn("list:: ", list);
		console.warn("id:: ", id);
		const listItem = list.find((item) => item[0] === id);
		console.warn("listItem:: ", listItem);
		return listItem;
	};
};
