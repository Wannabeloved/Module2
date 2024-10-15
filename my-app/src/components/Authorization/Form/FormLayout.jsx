import styles from "./Form.module.css";

export const FormLayout = ({ inputsArr, Input, SubmitButton, onSubmit }) => {
	return (
		<>
			<form className={styles.login100Form} onSubmit={onSubmit}>
				{inputsArr.map((inputObj) => (
					<Input key={inputObj.name} {...inputObj} />
				))}

				<SubmitButton />
			</form>
		</>
	);
};
