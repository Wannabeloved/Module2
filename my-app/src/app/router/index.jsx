import { Calculator } from "../../components/Calculator";
import { List } from "../../components/List";
import { Recipes } from "../../components/Recipes";
import { TicTacToe } from "../../components/TicTacToe";
import { Authorization } from "../../components/Authorization";
import { ToDoApp } from "../../components/ToDoApp";
import { Routes, Route, Navigate } from "react-router-dom";
import { OpenToDo } from "../../components/ToDoApp/widgets/OpenToDo";
import { Page404 } from "../../pages/Page404";

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
				<Route path="/404" element={<Page404 />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		);
	};
}
