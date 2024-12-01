import { Component } from "react";
import styles from "./PlayerSymbol.module.css";

export class PlayerSymbolLayout extends Component {
	render() {
		return <>{this.props.children}</>;
	}
}

// export const PlayerSymbolLayout = ({ children }) => {
// 	return <>{children}</>;
// };
