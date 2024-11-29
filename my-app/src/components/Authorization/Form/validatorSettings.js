import * as yup from "yup";

const getInput = (instance) => {
	return {
		name: instance.name,
		type: instance.type,
		placeholder: instance.placeholder,
		advice: instance.advice,
	};
};
const getShape = (instances) => {
	const shape = {};

	instances.forEach((instance) => {
		shape[instance.name] = instance.schema;
	});
	return shape;
};
const getInputs = (instances) => {
	const inputs = [];

	instances.forEach((instance) => {
		inputs.push(getInput(instance));
	});
	return inputs;
};

const fields = [
	{
		name: "email",
		type: "email",
		placeholder: "Почта",
		advice: "Введите свою почту",
		schema: yup
			.string()
			.email("Неверный email")
			.required("Это обязательное поле"),
	},
	{
		name: "password",
		type: "password",
		placeholder: "Пароль",
		advice: "Придумайте пароль",
		schema: yup
			.string()
			.typeError((val) => {
				return val.originalValue.length > 0
					? "Возраст должен быть числом"
					: "Это поле обязательно к заполнению";
			})
			.min(3, "Пароль должен быть не короче 3 символов")
			.max(25, "Пароль должен быть не длиннее 25 символов")
			.required("Это обязательное поле"), // он не работает почемуто с number
	},
];

export const schema = yup.object().shape(getShape(fields)).required();
export const inputs = getInputs(fields);
