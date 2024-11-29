import { SettingsFieldLayout } from "./SettingsFieldLayout";
import { Button } from "../../../entities/Buttons/Button";

import { useSelector } from "react-redux";

import { columnsRangeSelector } from "../../../redux-selectors/columnsRangeSelector";
import { columnsSelector } from "../../../redux-selectors/columnsSelector";
import { winLineCountSelector } from "../../../redux-selectors/winLineCountSelector";

import { useDispatch } from "react-redux";

import { setWinLineCount as setWinLineCountAction } from "../../../../../store/actions/setWinLineCount";
import { setColumns } from "../../../../../store/actions/setColumns";

export const SettingsField = () => {
	const columnsRange = useSelector(columnsRangeSelector);
	const columns = useSelector(columnsSelector);
	const winLineCount = useSelector(winLineCountSelector);

	const dispatch = useDispatch();

	const setCustomColumns = (num) => {
		if (winLineCount > num) dispatch(setWinLineCountAction(num));
		dispatch(setColumns(num));
	};
	const setWinLineCount = (num) => {
		dispatch(setWinLineCountAction(num));
	};

	const SetColumnsButton = ({ children }) => {
		return (
			<Button
				onClick={() => {
					setCustomColumns(children);
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
					setWinLineCount(e.target.value);
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
};
