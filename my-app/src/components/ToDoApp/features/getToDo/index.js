import { connectRealtimeDB } from "./api/connectRealtimeDB";
import { useConnectRealtimeDB } from "./model/useConnectRealtimeDB";

export { getFromDB } from "./api/connectRealtimeDB";

export const useGetToDo = (setStorage) => {
	const {
		isNeedToSortAlphabet,
		setIsNeedToSortAlphabet,
		setSubstringToSearch,
	} = useConnectRealtimeDB(connectRealtimeDB, setStorage);

	return {
		isNeedToSortAlphabet,
		setIsNeedToSortAlphabet,
		setSubstringToSearch,
	};
};
