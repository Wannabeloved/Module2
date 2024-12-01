import { Calculator } from "../../components/Calculator";
import { List } from "../../components/List";
import { Recipes } from "../../components/Recipes";
import { Authorization } from "../../components/Authorization";

import { ToDoApp } from "../../components/ToDoApp";
import { OpenField } from "../../components/ToDoApp/widgets/OpenField";

import { TicTacToe } from "../../components/TicTacToe";
import { Game } from "../../components/TicTacToe/widgets/Game";
import { Settings } from "../../components/TicTacToe/widgets/Settings";

import { Page404 } from "../../pages/Page404";

import { Navigate } from "react-router-dom";
import withRouter from "./withRouter";

export { NavLink, Outlet, useParams } from "react-router-dom";

const TicTacToeWithRoutes = withRouter(TicTacToe);

export const routesList = [
	{ path: "/", name: "Home", element: <List /> },
	{
		path: "/todo",
		name: "ToDoApp",
		element: <ToDoApp />,
		children: [
			{
				path: "task/:id",
				name: "task",
				element: <OpenField />,
			},
		],
	},
	{ path: "/recipes", name: "Recipes", element: <Recipes /> },
	{ path: "/calculator", name: "Calculator", element: <Calculator /> },
	{
		path: "/tictactoe",
		name: "TicTacToe",
		element: <TicTacToeWithRoutes />,
		children: [
			{
				path: "game",
				name: "TicTacToeGame",
				element: <Game />,
			},
			{
				path: "settings",
				name: "TicTacToeSettings",
				element: <Settings />,
			},
		],
	},
	{ path: "/List", name: "List", element: <List /> },
	{
		path: "/authorization",
		name: "Authorization",
		element: <Authorization />,
	},
	{
		path: "/404",
		name: "Page404",
		element: <Page404 />,
	},
	{
		path: "*",
		name: "Page404",
		element: <Navigate to="/404" />,
	},
];
