import { Component } from "react";
import { Button } from "../../../../entities/Buttons/Button";

export class StartButtonLayout extends Component {
	render() {
		const { startGame } = this.props;
		return (
			<Button onClick={startGame} className={`!text-neutral-200`}>
				start
			</Button>
		);
	}
}

// export const StartButtonLayout = ({ startGame }) => {
// 	return <Button onClick={startGame}>start</Button>;
// };
