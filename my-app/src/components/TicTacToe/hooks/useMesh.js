import { useState } from "react";

/* 

*/

export const useMesh = (columns) => {
	function createMesh(columns) {
		const desk = [];
		for (let ir = 0; ir < columns; ir++) {
			desk[ir] = [];
			for (let ic = 0; ic < columns; ic++) {
				desk[ir][ic] = "";
			}
		}

		return desk;
	}
	const [mesh, setMesh] = useState(createMesh(columns));

	const createNewMesh = (columns) => {
		// процедура
		setMesh(createMesh(columns));
	};

	const setTheMoveSymbol = (indexOfRow, indexInRow, whoMoved) => {
		try {
			if (mesh[indexOfRow][indexInRow]) {
				throw new Error("Symbol cannot be saved; this cell has symbol");
			} else {
				setMesh((prevVal) => {
					let newVal = [...prevVal];
					newVal[indexOfRow][indexInRow] = whoMoved;
					return newVal;
				});
				return true;
			}
		} catch (err) {
			throw err;
		}
	};

	return [mesh, setTheMoveSymbol, createNewMesh];
};
