import { Component } from "react";

import { StartButtonModel } from "./model";
import { StartButtonLayout } from "./ui";

export class StartButton extends Component {
	render() {
		return <StartButtonModel Layout={StartButtonLayout} />;
	}
}

// export const StartButton = () => {
// 	return <StartButtonModel Layout={StartButtonLayout} />;
// };
