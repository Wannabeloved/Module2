import styles from "./styles.module.css";
import { Button } from "../Buttons";

export const MainField = ({ numsArr, write, clear }) => {
	return (
		<div className={styles.mainField}>
			{numsArr.map((num) => {
				return (
					<Button
						callback={() => {
							write(num);
						}}
						slot={num}
					></Button>
				);
			})}
			<Button
				callback={() => {
					clear();
				}}
				slot={`C`}
			></Button>
		</div>
	);
};
