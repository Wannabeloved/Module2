import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import { App } from "./App";

export const router = createBrowserRouter(
	createRoutesFromElements(<Route path="*" element={<App />} />),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
