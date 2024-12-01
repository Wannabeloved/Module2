import { Component } from "react";

import { StopButtonModel } from "./model";
import { StopButtonLayout } from "./ui";

export class StopButton extends Component {
	render() {
		return <StopButtonModel Layout={StopButtonLayout} />;
	}
}

// export const StopButton = () => {
// 	return <StopButtonModel Layout={StopButtonLayout} />;
// };
