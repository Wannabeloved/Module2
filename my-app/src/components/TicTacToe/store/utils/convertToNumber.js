export const convertToNumber = (payload, nameOfAction = "unknown action") => {
	const num = Number(payload);
	if (isNaN(num)) throw new Error(`Not a number: in ${nameOfAction}`);
	return num;
};
