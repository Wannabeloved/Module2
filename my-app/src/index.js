import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./store";

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

import { App } from "./App";
import "./index.css";

export const router = createBrowserRouter(
	createRoutesFromElements(<Route path="*" element={<App />} />),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("STORE!!::", store);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			{console.log("STORE!!::", store)}
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
