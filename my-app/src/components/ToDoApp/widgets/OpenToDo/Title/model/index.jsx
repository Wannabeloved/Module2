import { useContext } from "react";
import { CurrentToDoContext } from "../../../../contexts/CurrentToDoContext";

export const TitleModel = ({ isEditing, titleRef, TitleLayout }) => {
	const {
		currentTask: { title },
	} = useContext(CurrentToDoContext);
	return (
		<TitleLayout title={title} titleRef={titleRef} isEditing={isEditing} />
	);
};
