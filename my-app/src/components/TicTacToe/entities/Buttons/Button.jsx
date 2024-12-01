import { Component } from "react";
import { ButtonLayout } from "./ButtonLayout";

export class Button extends Component {
	render() {
		const { onClick, children } = this.props;
		return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
	}
}

// export const Button = ({ onClick, children }) => {
// 	return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
// };
