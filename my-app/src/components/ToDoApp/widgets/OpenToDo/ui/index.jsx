export const OpenToDoLayout = ({ Title, Buttons, handleClose, isLoading }) => {
	return (
		<>
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
						onClick={handleClose || (() => {})}
					>
						P
					</button>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "2fr 1fr",
						gap: "15px",
					}}
				>
					<div
						style={{
							textAlign: "center",
							alignContent: "center",
							display: "grid",
							gridTemplateColumns: "2fr 1fr",
							borderRadius: "1.7rem",
							backgroundColor: true ? "rgba(255, 243, 133, 0.87)" : "white",
						}}
					>
						<h6
							contentEditable={false}
							style={{ color: "black", fontSize: "2rem", outline: "none" }}
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
			</article>
		</>
	);
};
