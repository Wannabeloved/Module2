import { Information } from "./widgets/Information/Information";

import { Outlet } from "../../app/router";

import { Component } from "react";

export class TicTacToe extends Component {
	navigateToSettings() {
		const { navigate } = this.props;
		navigate("settings", { replace: true });
	}
	navigateIfNeeded() {
		const { pathname } = this.props.location;
		const isMatch = pathname === "/tictactoe";
		if (isMatch) this.navigateToSettings();
	}
	componentDidMount() {
		this.navigateIfNeeded();
	}
	render() {
		this.navigateIfNeeded();
		return (
			<section
				className={`
				flex
				flex-col
				gap-6
				items-center
			`}
			>
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
