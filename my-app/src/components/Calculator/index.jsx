import { Header } from "./Header";
import { ScreenField } from "./ScreenField";
import { ActivityField } from "./ActivityField";
import { MainField } from "./MainField";
import { useCalculator } from "./hooks/useCalculator";

let createNumsArr = (range, colsCount) => {
	const [numsRangeLower, numsRangeHigher] = range;

	let numbers = [];
	let row = [];
	for (let i = numsRangeHigher; i >= numsRangeLower; i--) {
		row.unshift(i);
		if (row.length === colsCount) {
			numbers.push(...row);
			row = [];
		}
	}
	numbers.push(...row);

	return numbers;
};

export const Calculator = () => {
	const { write, clear, history, screen } = useCalculator();
	return (
		<div
			id="calculator"
			style={{
				width: "fit-content",
				height: "fit-content",
				backgroundColor: "rgb(44, 44, 44)",
				display: "flex",
				flexDirection: "column",
				gap: "15px",
				padding: "8px",
			}}
		>
			<Header />
			<ScreenField history={history} screen={screen} />
			<ActivityField write={write} />
			<MainField
				// в createNumsArr(диапазон цифр, количество столбцов)
				// в вёрстке количество столбцов (и цифр) поправляется в: MainField/styles :root
				numsArr={createNumsArr([0, 9], 3)}
				write={write}
				clear={clear}
			/>
		</div>
	);
};
