import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCurrentToDo } from "../../../../../store/actions/ToDoApp/setCurrentToDo";

import { OpenFieldCreatingModel } from "../creating/model";
import { OpenFieldExistingModel } from "../existing/model";

import { Title } from "./Title";

import { useParams } from "react-router-dom";

export const OpenFieldModel = ({ OpenFieldLayout }) => {
	const { id } = useParams();
	const isCreate = id === "create";

	const dispatch = useDispatch();
	const setCurrentTask = (todo) => {
		dispatch(setCurrentToDo(todo));
	};

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
