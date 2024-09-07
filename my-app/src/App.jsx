import styles from "./App.module.css";
import { Calculator } from "./components/Calculator";
import { List } from "./components/List";
import { Recipes } from "./components/Recipes";

// императивщина... :)
export const App = () => {
	return (
		<div className={styles.container}>
			<Recipes />
			{<List /> && null}
			{<Calculator /> && null}
		</div>
	);
};
