export const deleteRequest = async (path) => {
	const res = await fetch(`http://localhost:3005/${path}`, {
		method: "DELETE",
	});
	return res.json();
};
