import { stdSymbols } from "../../config/stdSymbols";
import { PlayerSymbolLayout } from "./PlayerSymbolLayout";

export const PlayerSymbol = ({ currentSymbol }) => {
	// этот пропс, по факту, просто строка ('x' или 'o'), при помощи которой будет найдена нужная SVGшка
	const currentStdTemplate = stdSymbols[currentSymbol];

	return <PlayerSymbolLayout>{currentStdTemplate || null}</PlayerSymbolLayout>;
};
