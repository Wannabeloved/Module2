import { Information } from "./widgets/Information/Information";

import { Outlet } from "react-router-dom";
import { useMatch } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import styles from "./index.module.css";
export const TicTacToe = () => {
	const isMatch = !!useMatch("/tictactoe");
	const navigate = useNavigate();
	useEffect(() => {
		if (isMatch) navigate("settings", { replace: true });
	}, [isMatch]);
	return (
		<section className={styles.main}>
			<Information />
			<Outlet />
		</section>
	);
};
