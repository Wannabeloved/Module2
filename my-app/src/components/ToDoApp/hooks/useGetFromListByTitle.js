export const useGetFromListByTitle = () => {
	return (list, title) => {
		const listItem = list.filter((item) => item.title.includes(title));
		console.warn("listItem:: ", listItem);
		return listItem;
	};
};
