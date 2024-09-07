import styles from "./app.module.css";
import data from "./data.json";
import { useState } from "react";

const steps = data; // Я не понимаю зачем делать этот массив стейтом

export const Recipes = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const step = 1;

	const increment = () => {
		let newVal = activeIndex + step;
		setIndex(corrector(newVal));
	};
	const decrement = () => {
		let newVal = activeIndex - step;
		setIndex(corrector(newVal));
	};
	const corrector = (val) => {
		let result = val;
		if (val >= steps.length) {
			result = 0;
		} else if (val < 0) {
			result = steps.length - 1;
		}
		return result;
	};
	const setIndex = (i) => {
		setActiveIndex(i);
	};
	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{steps[activeIndex].content}
					</div>
					<ul className={styles["steps-list"]}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						{steps.map((el, index) => (
							<li
								className={
									styles["steps-item"] +
									" " +
									(index <= activeIndex ? styles.done : "") +
									" " +
									(index === activeIndex ? styles.active : "")
								}
								key={el.id}
							>
								{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
								<button
									className={styles["steps-item-button"]}
									onClick={() => {
										setIndex(index);
									}}
								>
									{+el.id}
								</button>
								{/* При клике на кнопку установка выбранного шага в качестве активного */}
								{el.title}
							</li>
						))}
					</ul>
					<div className={styles["buttons-container"]}>
						<button className={styles.button} onClick={decrement}>
							Назад
						</button>
						<button className={styles.button} onClick={increment}>
							Далее
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
