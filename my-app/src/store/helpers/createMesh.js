export const createMesh = (columns) => {
	const desk = [];
	for (let ir = 0; ir < columns; ir++) {
		desk[ir] = [];
		for (let ic = 0; ic < columns; ic++) {
			desk[ir][ic] = "";
		}
	}
	return desk;
};
