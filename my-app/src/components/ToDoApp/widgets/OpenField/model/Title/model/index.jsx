import { useSelector } from "react-redux";
import { currentToDoSelector } from "../../../../../selectors/currentToDoSelector";

export const TitleModel = ({ isEditing, titleRef, TitleLayout }) => {
	const { title } = useSelector(currentToDoSelector);
	return (
		<TitleLayout title={title} titleRef={titleRef} isEditing={isEditing} />
	);
};
