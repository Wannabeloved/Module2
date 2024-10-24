import { RemoveButtonModel } from "./model";
import { RemoveButtonLayout } from "./ui";

import { useRemoveToDo } from "../../../../features/removeToDo";

export const RemoveButton = ({ id }) => {
	const remove = useRemoveToDo();

	return (
		<RemoveButtonModel
			RemoveButtonLayout={RemoveButtonLayout}
			remove={remove}
			id={id}
		/>
	);
};
