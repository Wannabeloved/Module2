import styles from "./App.module.css";
import { Calculator } from "./components/Calculator";
import { List } from "./components/List";

// императивщина... :)
export const App = () => {
	return (
		<div className={styles.container}>
			<List />
			{<Calculator /> && null}
		</div>
	);
};
