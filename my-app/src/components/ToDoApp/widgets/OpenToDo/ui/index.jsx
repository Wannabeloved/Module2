export const OpenToDoLayout = ({
	Title,
	Buttons,
	handleClose,
	isEditing,
	hasError,
}) => {
	return (
		<>
			<article
				style={{
					position: "absolute",
					width: "60vw",
					minHeight: "40vh",
					height: "fit-content",
					backgroundColor: "white",
					borderRadius: "1.7rem",
					boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
					display: "flex",
					flexDirection: "column",
					padding: "15px",
				}}
			>
				<div
					style={{
						height: "50px",
					}}
				>
					<button
						style={{
							justifySelf: "start",
							borderRadius: "50%",
							width: "30px",
							height: "30px",
							backgroundColor: "gray",
						}}
						onClick={handleClose || (() => {})}
					>
						✖
					</button>
				</div>

				{hasError?.hasError ? (
					<h1 style={{ margin: "0px auto" }}>{hasError.message}</h1>
				) : (
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "2fr 1fr",
							gap: "15px",
						}}
					>
						<div
							style={{
								alignContent: "center",
								borderRadius: "1.7rem",
								backgroundColor: isEditing
									? "rgba(255, 243, 133, 0.87)"
									: "white",
								padding: "20px",
								textWrap: "break-word",
								whiteSpace: "pre-wrap",
								outline: "none",
								wordBreak: "break-all",
							}}
						>
							<h6
								style={{
									color: "black",
									fontSize: "2rem",
									outline: "none",

									textWrap: "break-word",
									whiteSpace: "pre-wrap",
									outline: "none",
									wordBreak: "break-all",
								}}
							>
								{Title || "Loading..."}
							</h6>
						</div>
						<div
							style={{
								display: "grid",
								gridTemplateRows: "1fr",
								height: "fit-content",
							}}
						>
							{Buttons || "Loading..."}
						</div>
					</div>
				)}
			</article>
		</>
	);
};
