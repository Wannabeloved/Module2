import { MyMap } from "../../../MyMap/MyMap";
import { get } from "../../../shared/api/get";

export const useGetListFromDB = funcForGetListFromDB(get);
function funcForGetListFromDB(get) {
	return () => async (options) => {
		const arr = await get("todolist", { ...options });
		const myMap = new MyMap(arr)
			.withKeysBy("id")
			.sort((a, b) => a[1].createdAt - b[1].createdAt);
		return myMap;
	};
}
