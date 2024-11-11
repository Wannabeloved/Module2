import { ToDoList } from "./widgets/ToDoList";
import { Outlet } from "../../app/router";
import styles from "./index.module.css";

import { ContextsProvider } from "./contexts/index";
export const ToDoApp = () => {
	return (
		<article className={styles.container} style={{ alignItems: "center" }}>
			<ContextsProvider>
				<ToDoList>
					<Outlet />
				</ToDoList>
			</ContextsProvider>
		</article>
	);
};
