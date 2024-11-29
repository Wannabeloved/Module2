export const get = async (path, options) => {
	const res = await fetch(`http://localhost:3005/${path}`, {
		...options,
		method: "GET",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
	});
	return res.json();
};
