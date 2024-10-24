import styles from "./App.module.css";
import { Calculator } from "./components/Calculator";
import { List } from "./components/List";
import { Recipes } from "./components/Recipes";
import { TicTacToe } from "./components/TicTacToe";
import { Authorization } from "./components/Authorization";
import { StrictMode } from "react";
import { ToDoApp } from "./components/ToDoApp";

export const App = () => {
	return (
		<div className={styles.container}>
			{<ToDoApp />}
			{null && <Authorization />}
			{null && (
				<StrictMode>
					<TicTacToe />
				</StrictMode>
			)}
			{null && <Recipes />}
			{null && <List />}
			{null && <Calculator />}
		</div>
	);
};
