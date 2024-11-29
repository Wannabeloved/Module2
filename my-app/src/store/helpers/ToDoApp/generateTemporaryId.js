export const generateTemporaryId = () => {
	const myUuid = window.crypto.getRandomValues(new Uint32Array(1)).toString();
	return myUuid;
};
