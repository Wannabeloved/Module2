import { useState } from "react";
export const useRerender = () => {
	const [, setRerender] = useState(0);
	const rerender = () => setRerender((state) => (state ? false : true));
	return rerender;
};
