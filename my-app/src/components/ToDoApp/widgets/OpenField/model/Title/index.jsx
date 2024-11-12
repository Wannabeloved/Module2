import { TitleModel } from "./model";
import { TitleLayout } from "./ui";

export const Title = ({ isEditing, titleRef }) => {
	return (
		<TitleModel
			TitleLayout={TitleLayout}
			isEditing={isEditing}
			titleRef={titleRef}
		/>
	);
};
