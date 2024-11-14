import { Game } from "./widgets/Game";
import { Information } from "./widgets/Information/Information";
import { Settings } from "./widgets/Settings";

import * as settings from "./config";

import { store } from "./store";

import styles from "./index.module.css";
export const TicTacToe = () => {
	let { stdColumns, cellsCountRange, cellsForWin, stdSymbols } = settings;
	// Пока так; потом можно будет реализовать управление этими вещами
	const { isGameOn } = store.getState();

	return (
		<section className={styles.main}>
			<Information />
			{isGameOn ? <Game /> : <Settings />}
		</section>
	);
};
