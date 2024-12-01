import { Component } from "react";
import { ButtonLayout } from "./ButtonLayout";

export class Button extends Component {
	render() {
		return <ButtonLayout {...this.props}>{this.props.children}</ButtonLayout>;
	}
}

// export const Button = ({ onClick, children }) => {
// 	return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
// };
