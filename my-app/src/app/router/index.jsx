import { Calculator } from "../../components/Calculator";
import { List } from "../../components/List";
import { Recipes } from "../../components/Recipes";
import { TicTacToe } from "../../components/TicTacToe";
import { Authorization } from "../../components/Authorization";
import { ToDoApp } from "../../components/ToDoApp";
import { Routes, Route } from "react-router-dom";
import { OpenedTask } from "../../components/ToDoApp/entities/ToDo/opened";
import { OpenToDo } from "../../components/ToDoApp/widgets/OpenToDo";

export { NavLink, Outlet, useParams } from "react-router-dom";

export const routesList = [
	{ route: "/", name: "Home", Component: List },
	{
		route: "/todo",
		name: "ToDoApp",
		Component: ToDoApp,
		children: {
			route: "task/:id",
			name: "task",
			Component: OpenToDo,
		},
	},
	{ route: "/recipes", name: "Recipes", Component: Recipes },
	{ route: "/calculator", name: "Calculator", Component: Calculator },
	{ route: "/tictactoe", name: "TicTacToe", Component: TicTacToe },
	{ route: "/List", name: "List", Component: List },
	{ route: "/authorization", name: "Authorization", Component: Authorization },
];

export const View = Router(routesList);
function Router(routesList) {
	return () => {
		return (
			<Routes>
				{routesList.map(({ route, Component, children }) => (
					<Route key={`view-${route}`} path={route} element={<Component />}>
						{children && (
							<Route
								key={`view-${children.route}`}
								path={children.route}
								element={<children.Component />}
							/>
						)}
					</Route>
				))}
			</Routes>
		);
	};
}
