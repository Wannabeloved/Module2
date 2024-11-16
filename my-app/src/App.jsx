import styles from "./App.module.css";

import { Header } from "./header/NavList";

import { useRoutes } from "react-router-dom";
import { routesList } from "./app/router";

export const App = () => {
	const router = useRoutes(routesList);
	return (
		<div
			id="app"
			className={styles.container}
			style={{
				width: "100vw",
			}}
		>
			<Header />
			<article
				id="view"
				style={{ width: "100%", display: "flex", justifyContent: "center" }}
			>
				{router}
			</article>
		</div>
	);
};
