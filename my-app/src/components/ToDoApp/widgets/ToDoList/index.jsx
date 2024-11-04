import { ToDo } from "../ToDo";

import { SortButton } from "./Buttons/SortButton";
import { CreateButton } from "./Buttons/CreateButton";

import { ToDoListModel } from "./model";
import { ToDoListLayout } from "./ui";

export const ToDoList = ({ Search, storage }) => {
	return (
		<ToDoListModel
			ToDoListLayout={ToDoListLayout}
			buttons={{ SortButton, CreateButton }}
			Search={Search}
			ToDo={ToDo}
			storage={storage}
		/>
	);
};
