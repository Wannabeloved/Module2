import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { CurrentToDoContext } from "../../../contexts/CurrentToDoContext";

import { OpenFieldCreatingModel } from "../creating/model";
import { OpenFieldExistingModel } from "../existing/model";

import { Title } from "./Title";

import { useParams } from "react-router-dom";

export const OpenFieldModel = ({ OpenFieldLayout }) => {
	const { id } = useParams();
	const isCreate = id === "create";

	const { setCurrentTask } = useContext(CurrentToDoContext);

	const [isEditing, setIsEditing] = useState(false);

	const navigate = useNavigate();
	const handleClose = () => {
		navigate("/todo");
	};

	const titleRef = useRef(null);
	const title = () => <Title {...{ isEditing, titleRef }} />;
	const getTitle = () => titleRef.current.textContent;

	const props = {
		OpenFieldLayout,
		isEditing,
		setIsEditing,
		setCurrentTask,
		Title: title,
		getTitle,
		handleClose,
		id,
	};
	return (
		<>
			{isCreate ? (
				<OpenFieldCreatingModel {...props} />
			) : (
				<OpenFieldExistingModel {...props} />
			)}
		</>
	);
};
