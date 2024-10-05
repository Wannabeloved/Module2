import { useState } from "react";
export const useGameOn = () => {
	const [isGameOn, setIsGameOn] = useState(false);

	const startTheGame = () => {
		setIsGameOn(true);
	};
	const stopTheGame = () => {
		setIsGameOn(false);
	};

	return [isGameOn, startTheGame, stopTheGame];
};
