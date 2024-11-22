import { get } from "../../../shared/api/get";

const funcForGetListFromDB = (get) => () => async (options) => {
	const res = await get("todolist", { ...options });
	return res;
};
export const useGetListFromDB = funcForGetListFromDB(get);
