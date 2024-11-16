import { routesList, NavLink } from "../app/router";
import styles from "./styles.module.css";

const isNeed = (name) => {
	if (name !== "Page404") {
		return true;
	}
	return false;
};
const createNavEvement =
	(isNeed) =>
	({ to, className, children, name }) => {
		// это нужно потому, что иначе и для `li`, и для `NavLink` нужен будет `key`
		return (
			isNeed(name) && (
				<li>
					<NavLink to={to} className={className}>
						{children}
					</NavLink>
				</li>
			)
		);
	};
const NavElement = createNavEvement(isNeed);

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
					{routesList.map(({ path, name }) => (
						<NavElement
							key={`NavEvement-${path}`}
							to={path}
							className={styles.navLink}
							name={name}
						>
							{name}
						</NavElement>
					))}
				</ul>
			</nav>
		</header>
	);
};
