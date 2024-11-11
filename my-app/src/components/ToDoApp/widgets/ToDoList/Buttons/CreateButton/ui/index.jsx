import styles from "./index.module.css";
import { Button } from "../../../../../shared/ui/Button";
export const CreateButtonLayout = ({ onClick }) => {
	return (
		<Button className={styles.button} onClick={onClick}>
			Create
		</Button>
	);
};
