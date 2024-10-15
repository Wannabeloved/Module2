import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../Inputs/Input/Input";
import { SubmitButton } from "../Inputs/SubmitButton/SubmitButton";
import { FormLayout } from "./FormLayout";

import { schema, inputs } from "./validatorSettings";

import { useRef } from "react";

export const Form = () => {
	const {
		register,
		handleSubmit,
		reset,
		getFieldState,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	const createSubmitButton = () => {
		return <SubmitButton />;
	};

	const selectedInput = useRef(null);
	const generateInput = (InputComponent, register) => {
		return (props) => (
			<InputComponent
				{...props}
				ref={{
					getFieldState,
					selectedInput,
					register,
					errors,
				}}
			/>
		);
	};
	const getInput = generateInput(Input, register);

	return (
		<>
			<FormLayout
				inputsArr={inputs}
				onSubmit={handleSubmit(onSubmit)}
				Input={getInput}
				SubmitButton={createSubmitButton}
			>
				Form
			</FormLayout>
		</>
	);
};
