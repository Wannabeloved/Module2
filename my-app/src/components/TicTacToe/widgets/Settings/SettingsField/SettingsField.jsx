import { Button } from "../../../entities/Buttons/Button";

import { SettingsFieldLayout } from "./SettingsFieldLayout";
export const SettingsField = ({
	setColumns,
	range,
	setWinLineCount,
	currentColumns,
	winLineCount,
}) => {
	const setCustomColumns = (num) => {
		if (winLineCount > num) {
			setWinLineCount(num);
		}
		setColumns(num);
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
				range={range}
				currentColumns={currentColumns}
				Select={Select}
			/>
		</>
	);
};
