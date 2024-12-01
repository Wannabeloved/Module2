import { Component } from "react";
import { stdSymbols } from "../../config/stdSymbols";
import { PlayerSymbolLayout } from "./PlayerSymbolLayout";

export class PlayerSymbol extends Component {
	render() {
		const currentStdTemplate = stdSymbols[this.props.currentSymbol];
		return (
			<PlayerSymbolLayout>{currentStdTemplate || null}</PlayerSymbolLayout>
		);
	}
}

// export const PlayerSymbol = ({ currentSymbol }) => {
// 	// этот пропс, по факту, просто строка ('x' или 'o'), при помощи которой будет найдена нужная SVGшка
// 	const currentStdTemplate = stdSymbols[currentSymbol];

// 	return <PlayerSymbolLayout>{currentStdTemplate || null}</PlayerSymbolLayout>;
// };
