import { updateInDB } from "./api/updateInDB";
import { funcForEditToDo } from "./model/EditToDo";

export const useEditToDo = () => {
	return funcForEditToDo(updateInDB);
};
