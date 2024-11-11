import { updateInDB } from "./api/updateInDB";
import { useFuncForEditToDo } from "./model/EditToDo";

export const useEditToDo = () => {
	return useFuncForEditToDo(updateInDB);
};
