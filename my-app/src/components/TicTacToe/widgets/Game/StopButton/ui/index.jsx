import { Component } from "react";
import { Button } from "../../../../entities/Buttons/Button";

export class StopButtonLayout extends Component {
	render() {
		return <Button onClick={this.props.stopTheGame}>stop</Button>;
	}
}

// export const StopButtonLayout = ({ stopTheGame }) => {
// 	return <Button onClick={stopTheGame}>stop</Button>;
// };
