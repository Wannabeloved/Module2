export const useGetFromListById = () => {
	return (list, id) => {
		const listItem = list.find((item) => item[0] === id);
		return listItem;
	};
};
