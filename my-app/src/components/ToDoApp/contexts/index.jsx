import { CurrentToDoContextProvider } from "./CurrentToDoContext";
import { ToDoListContextProvider } from "./ToDoListContext";

export const ContextsProvider = ({ children }) => {
	return (
		<ToDoListContextProvider>
			<CurrentToDoContextProvider>{children}</CurrentToDoContextProvider>
		</ToDoListContextProvider>
	);
};
