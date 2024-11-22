import { deleteRequest } from "./../../../../shared/api/delete";

export const removeFromDB = (id) => {
	deleteRequest(`todolist/${id}`);
};
