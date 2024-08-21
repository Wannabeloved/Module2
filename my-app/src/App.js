import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

// императивщина... :)
export const App = () => {
	/* html декларативный, поэтому внизу точно деклоративность) */
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	); /* Ну, всегда он конечно корректным отображаться так не будет,
	можно сетИнтервал сделать) */
};
