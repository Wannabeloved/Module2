import { Component } from "react";
import { connect } from "react-redux";

import { columnsRangeSelector } from "../../../redux-selectors/columnsRangeSelector";
import { columnsSelector } from "../../../redux-selectors/columnsSelector";
import { winLineCountSelector } from "../../../redux-selectors/winLineCountSelector";

import { setWinLineCount as setWinLineCountAction } from "../../../../../store/actions/setWinLineCount";
import { setColumns as setColumnsAction } from "../../../../../store/actions/setColumns";

import { SettingsFieldLayout } from "./SettingsFieldLayout";
import { Button } from "../../../entities/Buttons/Button";

class SettingsFieldContainer extends Component {
	setCustomColumns(winLineCount, num, dispatch) {
		if (winLineCount > num) dispatch(setWinLineCountAction(num));
		dispatch(setColumnsAction(num));
	}
	setWinLineCount(num, dispatch) {
		dispatch(setWinLineCountAction(num));
	}

	render() {
		const { columnsRange, columns, winLineCount, dispatch } = this.props;
		const SetColumnsButton = ({ children }) => {
			return (
				<Button
					onClick={() => {
						this.setCustomColumns(winLineCount, children, dispatch);
					}}
				>
					{children}
				</Button>
			);
		};
		const Select = ({ className, children }) => {
			return (
				<select
					name=""
					id=""
					value={winLineCount}
					className={className}
					onChange={(e) => {
						this.setWinLineCount(e.target.value, dispatch);
					}}
				>
					{children}
				</select>
			);
		};
		return (
			<>
				<SettingsFieldLayout
					SetColumnsButton={SetColumnsButton}
					Select={Select}
					columnsRange={columnsRange}
					columns={columns}
				/>
			</>
		);
	}
}
export const SettingsField = connect(mapStateToProps)(SettingsFieldContainer);
function mapStateToProps(state) {
	return {
		columns: columnsSelector(state),
		columnsRange: columnsRangeSelector(state),
		winLineCount: winLineCountSelector(state),
	};
}

// export const SettingsField = () => {
// 	const columnsRange = useSelector(columnsRangeSelector);
// 	const columns = useSelector(columnsSelector);
// 	const winLineCount = useSelector(winLineCountSelector);

// 	const dispatch = useDispatch();

// 	const setCustomColumns = (num) => {
// 		if (winLineCount > num) dispatch(setWinLineCountAction(num));
// 		dispatch(setColumns(num));
// 	};
// 	const setWinLineCount = (num) => {
// 		dispatch(setWinLineCountAction(num));
// 	};

// 	const SetColumnsButton = ({ children }) => {
// 		return (
// 			<Button
// 				onClick={() => {
// 					setCustomColumns(children);
// 				}}
// 			>
// 				{children}
// 			</Button>
// 		);
// 	};

// 	const Select = ({ className, children }) => {
// 		return (
// 			<select
// 				name=""
// 				id=""
// 				value={winLineCount}
// 				className={className}
// 				onChange={(e) => {
// 					setWinLineCount(e.target.value);
// 				}}
// 			>
// 				{children}
// 			</select>
// 		);
// 	};

// 	return (
// 		<>
// 			<SettingsFieldLayout
// 				SetColumnsButton={SetColumnsButton}
// 				Select={Select}
// 				columnsRange={columnsRange}
// 				columns={columns}
// 			/>
// 		</>
// 	);
// };
