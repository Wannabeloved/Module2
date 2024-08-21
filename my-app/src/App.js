import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

// императивщина... :)
export const App = () => {
	return createElement("div", { className: "App" }, [
		createElement("header", { className: "App-header" }, [
			createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "logo",
			}),
			createElement("p", { children: "Edit " }, [
				createElement("code", null, ["src/App.js"]),
				" and save to reload.",
			]),
			createElement("a", {
				className: "App-link",
				href: "https://reactjs.org",
				target: "_blank",
				rel: "noopener noreferrer",
			}),
			createElement("p", null, [`${new Date().getFullYear()}`]),
		]),
	]);
};
