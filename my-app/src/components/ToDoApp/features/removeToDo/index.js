import { removeFromDB } from "./api/removeFromDB";

export function useRemoveToDo() {
	return (id) => {
		removeFromDB(id);
	};
}
