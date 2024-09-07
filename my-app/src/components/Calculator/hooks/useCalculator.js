import { useState } from "react";

let historyCurrent = [];
let lastIsSign = false;
let lastIsEqual = false;
let resultOnScreen = false;

/* Этот кастомный хук возвращает четыре элемента:
		1. функция для записи символа (write), принимающая как аргумент символ для записи
		2. функция для сброса состояний (clear), не принимающая аргументов
		3. массив (history) содержащий состояние истории
		4. примитив (screen) содержащий состояние вбиваемого числа/результата
*/

export const useCalculator = () => {
	const [history, setHistory] = useState([]);
	const [screen, setScreen] = useState(0);

	const calculate = (historyCurrent) => {
		const result = historyCurrent.reduce(
			(acc, num) =>
				num === "+" || num === "-" || num === "=" ? +acc : +acc + +num,
			0,
		);

		return result;
	};

	const write = (symbol) => {
		console.log(`lastIsEqual in the start:: `, lastIsEqual);

		let lastExpression;
		let lastResult = screen;

		if (lastIsEqual) {
			lastExpression = historyCurrent.at(-2);

			setHistory((prev) => []);
			historyCurrent = [];
		}

		let currentIsSign; // Boolean
		let currentIsEqual; // Boolean

		if (symbol === "+" || symbol === "-") {
			// если текущий елемент -- знак
			if (lastIsEqual) {
				historyCurrent = [lastResult];

				lastIsSign = false;
				lastIsEqual = false;
			}
			currentIsSign = true;
		} else if (symbol === "=") {
			if (lastIsEqual) {
				historyCurrent = [lastResult, lastExpression];
			}

			currentIsSign = true;
			currentIsEqual = true;
		} else {
			// если текущий елемент -- НЕ знак

			currentIsSign = false;
			lastIsEqual = false;
			lastIsSign = false;
		}

		let forPush = symbol.toString();

		console.log(`lastIsEqual:: `, lastIsEqual);

		if (!currentIsSign) {
			// если текущее -- цифра
			if (resultOnScreen) {
				setScreen((el) => symbol.toString());
				resultOnScreen = false;
			} else {
				setScreen((el) => (el ? el + symbol.toString() : symbol.toString()));
			}
			const lastElement = historyCurrent.pop() || "";
			forPush = lastElement + forPush;
		} else if (lastIsSign && lastIsEqual === false) {
			console.log(`pfikb`);
			// если (текущее -- знак &&) последнее -- знак
			// тогда меняем (удаляем) последний элемент
			historyCurrent.pop();
		}
		historyCurrent.push(forPush);

		console.log(historyCurrent);

		if (currentIsSign) {
			let result = calculate(historyCurrent);

			setHistory([...historyCurrent]);
			setScreen((el) => result);

			resultOnScreen = true;

			currentIsSign = false;
			lastIsSign = true;
		} else {
			lastIsSign = false;
		}
		if (currentIsEqual) {
			lastIsEqual = true;
		}
		console.log(`lastIsEqual in the end:: `, lastIsEqual);
		console.log(`закончили`);
	};

	const clear = () => {
		setScreen(0);
		setHistory([]);
		historyCurrent = [];
	};

	return { write, clear, history, screen };
};
