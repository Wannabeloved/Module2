import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { getFromDB } from "../../../features/connectWithDB";
import { useEffect } from "react";
import { useCreateToDo } from "../../../features/createToDo";

export const OpenToDoModel = ({ OpenToDoLayout, allButtons, Title }) => {
	const { id } = useParams();
	const isCreated = id === "create";
	console.warn("id::", id);
	const navigate = useNavigate();

	const titleRef = useRef(null);

	const [hasError, setHasError] = useState(null);

	const [stage, setStage] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isEditing, setIsEditing] = useState(false);
	const { sendToDB, addNewToDo, cancelCreate } = useCreateToDo();

	useEffect(() => {
		if (id === "create") {
			const newToDo = addNewToDo();
			console.warn(newToDo);
			setStage(newToDo);
			setIsLoading(false);
			setIsEditing(true);
		} else {
			var promise = getFromDB(id);
			promise?.then((snapshot) => {
				if (snapshot.exists()) {
					setStage(snapshot.val());
					setIsLoading(false);
					clearTimeout(timeout);
				} else {
					setHasError({
						hasError: true,
						message: "404: Not Found",
					});
					clearPromise();
					clearTimeout(timeout);
				}
			});
			function clearPromise() {
				promise = null;
			}
			var timeout = setTimeout(() => {
				setHasError({
					hasError: true,
					message: "408: Request Timeout",
				});
				clearPromise();
				clearTimeout(timeout);
			}, 5000);
			return () => {
				clearPromise();
				clearTimeout(timeout);
			};
		}
	}, []);

	const goToListPage = () => {
		navigate("/todo");
	};
	const handleCancelCreate = () => {
		cancelCreate();
		goToListPage();
	};

	const setIsCurrentCompleted = (callback) => {
		setStage((prevState) => ({
			...prevState,
			isCompleted: callback(prevState.isCompleted),
		}));
	};

	const Buttons = () => {
		return isCreated ? (
			<allButtons.CreateButtons
				{...{
					sendToDB,
					goToListPage,
					handleCancelCreate,
					stage,
					titleRef,
				}}
			/>
		) : (
			<allButtons.OpenButtons
				{...{
					isEditing,
					setIsEditing,
					setIsCurrentCompleted,
					goToListPage,
					todoInfo: { id, stage, titleRef },
				}}
			/>
		);
	};

	const title = () => {
		return (
			<Title
				{...{ title: stage.title, isInEditingMode: isEditing, titleRef }}
			/>
		);
	};

	return (
		<OpenToDoLayout
			Buttons={isLoading ? null : Buttons()}
			Title={isLoading ? null : title()}
			handleClose={isCreated ? handleCancelCreate : goToListPage}
			isEditing={isEditing}
			hasError={hasError}
		/>
	);
};
