import { routesList, NavLink } from "../app/router";
import styles from "./styles.module.css";

const NavEvement = ({ to, children, className }) => (
	<li>
		<NavLink to={to} className={className}>
			{children}
		</NavLink>
	</li>
);

export const Header = () => {
	return (
		<header style={{ backgroundColor: "black", marginBottom: "20px" }}>
			<nav
				style={{
					width: "100%",
					height: "100%",
					paddingBottom: "20px",
					paddingTop: "20px",
				}}
			>
				<ul
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "row",
						gap: "60px",
					}}
				>
					{routesList.map(({ route, name }) => (
						<NavEvement key={route} to={route} className={styles.navLink}>
							{name}
						</NavEvement>
					))}
				</ul>
			</nav>
		</header>
	);
};
