import PropTypes from "prop-types";

export const InformationLayout = ({ whoWin, isFinita, children }) => {
	InformationLayout.propTypes = {
		whoWin: PropTypes.string,
	};

	return <>{children}</>;
};
