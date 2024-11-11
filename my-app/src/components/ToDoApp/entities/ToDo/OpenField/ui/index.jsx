import styles from "./styles.module.css";

export const OpenFieldLayout = ({
	Title,
	Buttons,
	handleClose,
	isEditing,
	isLoading,
	error,
}) => {
	return (
		<>
			<article className={styles.container}>
				<div className={styles.closeButtonContainer}>
					<button
						className={styles.closeButton}
						onClick={handleClose || (() => {})}
					>
						✖
					</button>
				</div>

				{error ? (
					<h1 style={{ margin: "0px auto" }}>{"error"}</h1>
				) : (
					<div className={styles.fieldContainer}>
						<div
							className={styles.titleContainer}
							style={{
								backgroundColor: isEditing
									? "rgba(255, 243, 133, 0.87)"
									: "white",
							}}
						>
							<h6 className={styles.title}>
								<Title />
							</h6>
						</div>
						<div className={styles.buttonsContainer}>
							<Buttons />
						</div>
					</div>
				)}
			</article>
		</>
	);
};
