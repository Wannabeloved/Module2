import { ToDoList } from "./widgets/ToDoList";
import { Outlet } from "../../app/router";
import styles from "./index.module.css";

export const ToDoApp = () => {
	return (
		<article className={styles.container} style={{ alignItems: "center" }}>
			<ToDoList>
				<Outlet />
			</ToDoList>
		</article>
	);
};
