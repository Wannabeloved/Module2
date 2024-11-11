import { connectRealtimeDB } from "./api/connectRealtimeDB";
import { useConnectController } from "./model/useConnectRealtimeDB";

export { getFromDBById } from "./api/connectRealtimeDB";

export const useConnectWithDB = (setStorage) => {
	const {
		isNeedToSortAlphabet,
		setIsNeedToSortAlphabet,
		setSubstringToSearch,
	} = useConnectController(connectRealtimeDB, setStorage);

	return {
		isNeedToSortAlphabet,
		setIsNeedToSortAlphabet,
		setSubstringToSearch,
	};
};
