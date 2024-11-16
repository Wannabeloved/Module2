import styles from "./styles.module.css";
import { useState } from "react";

export const List = () => {
	const [currentValue, setCurrentValue] = useState("");
	const [list, setList] = useState([]);
	const [isError, setIsError] = useState(false);

	// Я прочитал тз уже после того как сделал это задание по гифке из урока, поэтому такие вещи как класснеймы - в камелкейсе, а не className={styles['page-heading']}

	const inputNew = () => {
		const item = prompt("Введите значение").trim();
		if (item.length >= 3) {
			setCurrentValue(item);
			setIsError(false);
		} else {
			setIsError(true);
		}
	};
	const addToList = () => {
		const newItem = { id: Date.now(), value: currentValue };
		setList((arr) => [...arr, newItem]);
		setCurrentValue("");
		setIsError(false);
	};

	return (
		<div className="app">
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{currentValue}</output>"
			</p>
			{isError && (
				<div className={styles.error}>
					Введенное значение должно содержать минимум 3 символа
				</div>
			)}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={inputNew}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={currentValue.length === 0}
					onClick={addToList}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{list.length ? null : (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				)}
				<ul className={styles.list}>
					{list.map((el) => (
						<li className={styles.listItem}>{el.value}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
