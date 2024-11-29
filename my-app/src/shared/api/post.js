export const post = async (path, payload, options) => {
	const res = await fetch(`http://localhost:3005/${path}`, {
		...options,
		body: JSON.stringify(payload),
		method: options?.method || "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
	});
	return res.json();
};
