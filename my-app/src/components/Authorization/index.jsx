import { Form } from "./Form/Form";

import styles from "./index.module.css";
export const Authorization = () => {
	return (
		<section className={styles.wrapLogin100}>
			<h1 style={{ textAlign: "center", padding: "35px" }}>Authorization</h1>
			<Form />
		</section>
	);
};
