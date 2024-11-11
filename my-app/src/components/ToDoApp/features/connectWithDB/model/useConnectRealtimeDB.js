import { useEffect, useState } from "react";

export const useConnectController = (connectDB, setStorage) => {
	const [isNeedToSortAlphabet, setIsNeedToSortAlphabet] = useState(true);
	const [substringToSearch, setSubstringToSearch] = useState("");
	useEffect(() => {
		const howSort = isNeedToSortAlphabet ? "title" : "createdAt";
		return connectDB(
			(newList) => {
				setStorage(() => {
					return isNeedToSortAlphabet ? newList : newList.reverse();
				});
			},
			substringToSearch,
			howSort,
		);
	}, [isNeedToSortAlphabet, substringToSearch]);

	return {
		isNeedToSortAlphabet,
		setIsNeedToSortAlphabet,
		setSubstringToSearch,
	};
};
