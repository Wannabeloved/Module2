import styles from "./App.module.css";
import { View } from "./app/router";

import { Header } from "./header/NavList";

export const App = () => {
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
				<View />
			</article>
		</div>
	);
};
