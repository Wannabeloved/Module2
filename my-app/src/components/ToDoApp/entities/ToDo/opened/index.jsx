import { useMatch, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import { EditButton } from "../../../widgets/ToDo/Buttons/EditButton";
import { SaveButton } from "../../../widgets/ToDo/Buttons/SaveButton";
import { RemoveButton } from "../../../widgets/ToDo/Buttons/RemoveButton";
import { Completed } from "../../../widgets/ToDo/Buttons/Completed";

import { useNavigate } from "react-router-dom";

import { useRef, useState } from "react";

import { getFromDB } from "../../../features/getToDo";

import { useEffect } from "react";
import { ConfirmCreateButton } from "./../../../widgets/ToDo/Buttons/ConfirmCreateButton";
import { CancelCreateButton } from "./../../../widgets/ToDo/Buttons/CancelCreateButton";

import { useCreateToDo } from "../../../features/createToDo";

export const OpenedTask = () => {
	const { id } = useParams();
	console.warn("id::", id);
	const navigate = useNavigate();

	const titleRef = useRef(null);

	const [stage, setStage] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const { sendToDB, addNewToDo, cancelCreate } = useCreateToDo();

	useEffect(() => {
		if (id === "create") {
			const newToDo = addNewToDo();
			console.warn(newToDo);
			setStage(newToDo);
			setIsEditing(true);
		} else {
			let promise = getFromDB(id);
			promise?.then((snapshot) => {
				if (snapshot.exists()) {
					setStage(snapshot.val());
				} else {
					// 404
				}
			});
			return () => {
				promise = undefined;
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

	const existingCardButtons = () =>
		isEditing ? (
			<SaveButton
				{...{
					id,
					titleRef,
					isCompleted: stage.isCompleted,
					createdAt: stage.createdAt,
					setIsEditing,
					goToListPage,
				}}
			/>
		) : (
			<EditButton {...{ setIsEditing }} />
		);
	const createCardButtons = () => (
		<>
			<ConfirmCreateButton
				{...{
					functions: { sendToDB, goToListPage },
					titleRef,
					isCurrentCompleted: stage.isCompleted,
					createdAt: stage.createdAt,
				}}
			/>
			<CancelCreateButton cancelCreate={handleCancelCreate} />
		</>
	);

	return (
		<>
			{stage ? (
				<article
					style={{
						position: "absolute",
						width: "60vw",
						height: "40vh",
						backgroundColor: "white",
						borderRadius: "1.7rem",
						boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
						display: "grid",
						gridTemplateRows: "1fr 4fr",
						padding: "15px",
					}}
				>
					<div>
						<button
							style={{
								justifySelf: "start",
								borderRadius: "50%",
								width: "30px",
								height: "30px",
								backgroundColor: "gray",
							}}
							onClick={goToListPage}
						>
							P
						</button>
					</div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "2fr 1fr",
						}}
					>
						<div
							style={{
								textAlign: "center",
								alignContent: "center",
								display: "grid",
								gridTemplateColumns: "2fr 1fr",
								borderRadius: "1.7rem",
								backgroundColor: isEditing
									? "rgba(255, 243, 133, 0.87)"
									: "white",
							}}
						>
							<h6
								contentEditable={isEditing}
								ref={titleRef}
								style={{ color: "black", fontSize: "2rem", outline: "none" }}
							>
								{stage.title}
							</h6>
						</div>
						<div
							style={{
								display: "grid",
								gridTemplateRows: "1fr 1fr",
								height: "fit-content",
							}}
						>
							<div
								style={{
									height: "fit-content",
									justifySelf: "center",
								}}
							>
								<Completed
									isCurrentCompleted={stage.isCompleted}
									setIsCurrentCompleted={setIsCurrentCompleted}
									otherCardInfo={{ ...stage, id }}
								/>
							</div>
							{id === "create" ? (
								<div
									style={{
										display: "flex",
										gap: "10px",
										justifyContent: "center",
									}}
								>
									{createCardButtons()}
								</div>
							) : (
								<div
									style={{
										display: "grid",
										gridTemplateColumns: "1fr 1fr",
									}}
								>
									<div style={{ justifySelf: "center" }}>
										{existingCardButtons()}
									</div>
									<div style={{ justifySelf: "center" }}>
										<RemoveButton
											{...{
												id,
												createdAt: stage.createdAt,
												titleRef,
												isCurrentCompleted: stage.isCompleted,
												setIsCurrentCompleted,
												goToListPage,
											}}
										/>
									</div>
								</div>
							)}
						</div>
					</div>
				</article>
			) : (
				<h1>404</h1>
			)}
		</>
	);
};
