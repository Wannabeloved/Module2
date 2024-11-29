import { SaveButtonModel } from "./model";
import { SaveButtonLayout } from "./ui";

export const SaveButton = ({ getTitle, setIsEditing }) => {
	return <SaveButtonModel {...{ getTitle, setIsEditing, SaveButtonLayout }} />;
};
