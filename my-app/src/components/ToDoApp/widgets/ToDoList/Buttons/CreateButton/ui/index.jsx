import styles from "./index.module.css";
import { Button } from "../../../../../shared/ui/Button";
export const CreateButtonLayout = ({ onClick, disabled }) => {
	return (
		<Button className={styles.button} onClick={onClick} disabled={disabled}>
			Create
		</Button>
	);
};
