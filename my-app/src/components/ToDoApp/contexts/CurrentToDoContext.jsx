import { createContext } from "react";
import { useState } from "react";

export const CurrentToDoContext = createContext({});
export const CurrentToDoContextProvider = ({ children }) => {
	const [currentTask, setCurrentTask] = useState({});

	const patchCurrentTask = (newValues) => {
		setCurrentTask((prevValue) => {
			return {
				...prevValue,
				...newValues,
			};
		});
	};

	return (
		<CurrentToDoContext.Provider
			value={{ currentTask, patchCurrentTask, setCurrentTask }}
		>
			{children}
		</CurrentToDoContext.Provider>
	);
};
