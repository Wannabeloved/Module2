export const setSymbolInMesh = (mesh, indexOfRow, indexInRow, whoMoved) => {
	const newMesh = window.structuredClone(mesh);
	newMesh[indexOfRow][indexInRow] = whoMoved;
	return newMesh;
};
