import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
	return function (props) {
		const location = useLocation();
		const navigate = useNavigate();
		const params = useParams();

		return (
			<Component
				{...props}
				location={location}
				navigate={navigate}
				params={params}
			/>
		);
	};
}

export default withRouter;
