import { Information } from "./widgets/Information/Information";

import { Outlet } from "../../app/router";

import { Component } from "react";

import styles from "./index.module.css";

export class TicTacToe extends Component {
	navigateToSettings() {
		const { navigate } = this.props;
		navigate("settings", { replace: true });
	}
	componentDidMount() {
		const { pathname } = this.props.location;
		const isMatch = pathname === "/tictactoe";
		if (isMatch) this.navigateToSettings();
	}
	render() {
		return (
			<section className={styles.main}>
				<Information />
				<Outlet />
			</section>
		);
	}
}

// export const TicTacToe = () => {
// 	const isMatch = !!useMatch("/tictactoe");
// 	const navigate = useNavigate();
// 	useEffect(() => {
// 		if (isMatch) navigate("settings", { replace: true });
// 	}, [isMatch]);
// 	return (
// 		<section className={styles.main}>
// 			<Information />
// 			<Outlet />
// 		</section>
// 	);
// };
