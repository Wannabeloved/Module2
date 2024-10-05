import { useGameOn } from "./hooks/useGameOn";
import { useMesh } from "./hooks/useMesh";
import { useMove } from "./hooks/useMove";
import { useMovesCount } from "./hooks/useMovesCount";
import { useWinChecker } from "./hooks/useWinChecker";
import { useOverflow } from "./hooks/useOverflow";
import { useFinish } from "./hooks/useFinish";
import { useError } from "./hooks/useError";
import { useCustomColumnsCount } from "./hooks/useCustomColumnsCount";
import { useCustomWinLineCount } from "./hooks/useCustomLineCount";

import { Game } from "./widgets/Game";
import { Information } from "./widgets/Information/Information";
import { Settings } from "./widgets/Settings";

import * as settings from "./config";

import styles from "./index.module.css";
export const TicTacToe = () => {
	let { stdColumns, cellsCountRange, cellsForWin, stdSymbols } = settings;
	// Пока так; потом можно будет реализовать управление этими вещами

	const [isGameOn, startTheGame, stopTheGame] = useGameOn();
	const [mesh, setTheMoveSymbol, createNewMesh] = useMesh(stdColumns);
	const [whoMoves, changeSymbol, resetUseMove] = useMove(stdSymbols);
	const [currentColumns, setCurrentColumns] = useCustomColumnsCount(stdColumns);
	const [movesCount, incrementMovesCount, resetMovesCount] = useMovesCount();
	const [isWin, checkWin] = useWinChecker(mesh, cellsForWin);
	const [isOverflow, checkOverflow] = useOverflow(stdColumns, currentColumns);
	const [isFinish, finishChecker, resetUseFinish] = useFinish();
	const [isError, setIsError] = useError();
	const [winLineCount, setCustomWinLineCount] =
		useCustomWinLineCount(stdColumns);

	const onMove = (indexOfRow, indexInRow) => {
		console.warn("isFinish:: ", isFinish);
		if (isFinish) {
			return;
		}
		try {
			setTheMoveSymbol(indexOfRow, indexInRow, whoMoves);
			const movesCount = incrementMovesCount();
			const callbacks = { checkWin, checkOverflow };
			const isFinish = finishChecker(
				indexOfRow,
				indexInRow,
				movesCount,
				whoMoves,
				winLineCount,
				callbacks,
			);
			setIsError(false);
			changeSymbol(isFinish);
		} catch (err) {
			setIsError(true);
		}
	};

	const setSettings = () => {};

	const startNewGame = () => {
		createNewMesh(currentColumns);
		startTheGame();
	};

	const stopCurrentGame = () => {
		stopTheGame();
		setIsError(false);
		resetUseMove(0);
		resetMovesCount();
		resetUseFinish();
	};

	return (
		<section className={styles.main}>
			<Information
				isGameOn={isGameOn}
				whoMoves={whoMoves}
				isWin={isWin}
				isFinita={isFinish}
				isError={isError}
				movesCount={movesCount}
				columns={currentColumns}
				cellsForWin={winLineCount}
			></Information>
			{isGameOn ? (
				<>
					<Game
						isGameOn={isGameOn}
						whoMoves={whoMoves}
						isFinita={isFinish}
						isError={isError}
						movesCount={movesCount}
						currentColumns={currentColumns}
						mesh={mesh}
						stopTheGame={stopCurrentGame}
						onMove={onMove}
					/>
				</>
			) : (
				<Settings
					resetGame={startNewGame}
					setColumns={setCurrentColumns}
					cellsCountRange={cellsCountRange}
					setWinLineCount={setCustomWinLineCount}
					currentColumns={currentColumns}
					winLineCount={winLineCount}
				/>
			)}
		</section>
	);
};
