import styles from "./App.module.css";
import { Calculator } from "./components/Calculator";
import { List } from "./components/List";
import { Recipes } from "./components/Recipes";
import { TicTacToe } from "./components/TicTacToe";
import { StrictMode } from "react";

// императивщина... :)
export const App = () => {
	return (
		<div className={styles.container}>
			<StrictMode>
				<TicTacToe />
			</StrictMode>
			{<Recipes /> && null}
			{<List /> && null}
			{<Calculator /> && null}
		</div>
	);
};
