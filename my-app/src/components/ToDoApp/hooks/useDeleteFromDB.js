import { deleteRequest } from "../../../shared/api/delete";
export const useDeleteFromDB = () => (id) => deleteRequest(`todolist/${id}`);
