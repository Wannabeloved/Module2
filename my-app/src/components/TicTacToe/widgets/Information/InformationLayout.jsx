export const InformationLayout = ({
	isGameOn,
	GameInformation,
	SettingsInformation,
}) => {
	return <>{isGameOn ? <GameInformation /> : <SettingsInformation />}</>;
};
