export const findToDoIndexById = (id, list) => {
	return list.findIndex((el) => el[0] === id);
};
