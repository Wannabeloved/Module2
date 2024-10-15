import styles from "./Input.module.css";
import { forwardRef } from "react";

export const Input = forwardRef(({ type, placeholder, advice, name }, ref) => {
	const { register, errors, getFieldState, selectedInput } = ref;

	return (
		<div className={`${styles.wrapInput100} ${styles.validateInput}`}>
			<input
				autoFocus={selectedInput?.current?.name === name}
				className={`
					${getFieldState(name).isDirty ? styles.hasVal : ""} ${styles.input100}`}
				type={type}
				id={name}
				{...register(name)}
				onBlur={(e) => {
					if (e.target.value.length > 0) {
						e.target.classList.add(styles.hasVal);
					} else {
						e.target.classList.remove(styles.hasVal);
					}
				}}
				onFocus={(e) => (selectedInput.current = e.target)}
			/>

			<span
				className={styles.focusInput100}
				data-placeholder={`${placeholder}`}
			></span>
			<span
				className={styles.alertValidate}
				style={{ color: errors[name]?.message ? "red" : "#000" }}
				data-validate={errors[name]?.message || advice}
			></span>
		</div>
	);
});
