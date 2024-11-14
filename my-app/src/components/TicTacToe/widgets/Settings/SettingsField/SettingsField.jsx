import { SettingsFieldLayout } from "./SettingsFieldLayout";
import { Button } from "../../../entities/Buttons/Button";

import { useRerender } from "../../../hooks/useRerender";

import { store } from "../../../store";
export const SettingsField = () => {
	const { winLineCount, columnsRange, columns } = store.getState();
	const rerender = useRerender();

	// const [, render] = useState(0);
	console.log("IM RENDERING");
	console.log(winLineCount, columnsRange, columns);
	store.subscribe(rerender);

	const setCustomColumns = (num) => {
		console.log("winLineCount > num", winLineCount, num);
		if (winLineCount > num) {
			store.dispatch({ type: "SET_COLUMNS_AND_WIN_LINE_COUNT", payload: num });
			return;
		}
		store.dispatch({ type: "SET_COLUMNS", payload: num });
	};
	const setWinLineCount = (num) => {
		store.dispatch({ type: "SET_WIN_LINE_COUNT", payload: num });
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
