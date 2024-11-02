import { routesList, NavLink } from "../app/router";

const NavEvement = ({ to, children }) => (
	<li>
		<NavLink to={to}>{children}</NavLink>
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
						<NavEvement key={route} to={route}>
							{name}
						</NavEvement>
					))}
				</ul>
			</nav>
		</header>
	);
};
