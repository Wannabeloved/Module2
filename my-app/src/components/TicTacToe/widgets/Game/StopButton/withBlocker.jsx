import { useBlocker } from "react-router-dom";
import { STOP_THE_GAME } from "../../../../../store/actions";

export function withBlocker(Component) {
	function confirm() {
		return window.confirm("The game will be reset.\nDo you want to exit?");
	}
	return function (props) {
		let unblock = useBlocker(() => {
			if (
				props.isWin ||
				props.isOverflow ||
				props.movesCount === 0 ||
				confirm()
			) {
				props.dispatch(STOP_THE_GAME);
				return false;
			}
			return true;
		});
		function unblocker() {
			unblock = undefined;
		}
		return <Component {...props} unblock={unblocker} />;
	};
}
