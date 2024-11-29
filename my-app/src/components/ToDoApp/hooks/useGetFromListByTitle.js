export const useGetFromListByTitle = () => {
	return (list, title) => {
		if (!(title?.length > 0)) return list;
		const regex = new RegExp(`\\b${title.trim()}`, "i");
		const listItem = list.filter(([, item]) => regex.test(item.title.trim()));
		return listItem;
	};
};
