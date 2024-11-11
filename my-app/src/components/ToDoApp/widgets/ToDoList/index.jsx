import { ToDo } from "../../entities/ToDo/index";

import { SortButton } from "./Buttons/SortButton";
import { CreateButton } from "./Buttons/CreateButton";

import { ToDoListModel } from "./model";
import { ToDoListLayout } from "./ui";
import { Search } from "./../Search/index";

export const ToDoList = ({ children }) => {
	return (
		<ToDoListModel
			ToDoListLayout={ToDoListLayout}
			buttons={{ SortButton, CreateButton }}
			Search={Search}
			ToDo={ToDo}
		>
			{children}
		</ToDoListModel>
	);
};
