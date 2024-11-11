import { createContext } from "react";
import { useState } from "react";

export const ToDoListContext = createContext({});

export const ToDoListContextProvider = ({ children }) => {
	const [list, setList] = useState([]);

	return (
		<ToDoListContext.Provider value={{ list, setList }}>
			{children}
		</ToDoListContext.Provider>
	);
};
