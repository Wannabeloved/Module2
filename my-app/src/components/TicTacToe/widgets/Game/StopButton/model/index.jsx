import { useNavigate, useBlocker } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { STOP_THE_GAME } from "../../../../../../store/actions";

import { isWinSelector } from "./../../../../redux-selectors/isWinSelector";
import { isOverflowSelector } from "./../../../../redux-selectors/isOverflowSelector";
import { movesCountSelector } from "./../../../../redux-selectors/movesCountSelector";

export const StopButtonModel = ({ Layout }) => {
	const navigate = useNavigate();
	const navigateToSettings = () => {
		navigate("/tictactoe");
	};

	const confirm = () =>
		window.confirm("The game will be reset.\nDo you want to exit?");

	const dispatch = useDispatch();

	const isWin = useSelector(isWinSelector);
	const isOverflow = useSelector(isOverflowSelector);
	const movesCount = useSelector(movesCountSelector);
	useBlocker(() => {
		if (isWin || isOverflow || movesCount === 0 || confirm()) {
			console.log("BLOCKER");
			dispatch(STOP_THE_GAME);
			return false;
		}
		return true;
	});

	return <Layout stopTheGame={navigateToSettings} />;
};
