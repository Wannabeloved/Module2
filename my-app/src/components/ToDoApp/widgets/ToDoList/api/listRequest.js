export const listRequest = (getList, setList) => {
	const controller = new AbortController();
	getList(controller).then((list) => list && setList(list));
	return () => {
		controller.abort();
	};
};
