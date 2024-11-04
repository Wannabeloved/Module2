import { ToDoList } from "./widgets/ToDoList";
import { Search } from "./widgets/Search";
import { useState } from "react";
import styles from "./index.module.css";
import { Outlet } from "../../app/router";
export const ToDoApp = () => {
	const [list, setList] = useState([]);
	return (
		<article className={styles.container} style={{ alignItems: "center" }}>
			<ToDoList Search={Search} storage={{ list, setList }} />
			<Outlet />
		</article>
	);
};
