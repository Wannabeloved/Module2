import { ToDoList } from "./widgets/ToDoList";
import { Search } from "./widgets/Search";

import styles from "./index.module.css";
export const ToDoApp = () => {
	return (
		<article className={styles.container}>
			<ToDoList Search={Search} />
		</article>
	);
};
