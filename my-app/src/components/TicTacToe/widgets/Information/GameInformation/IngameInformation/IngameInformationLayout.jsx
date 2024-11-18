export const IngameInformationLayout = ({
	movesCount,
	isError,
	ErrorInformation,
}) => {
	return (
		<>
			<div>
				Ходов:
				<br />
				{movesCount}
			</div>
			{isError && <ErrorInformation />}
		</>
	);
};
