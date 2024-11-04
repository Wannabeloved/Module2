import { RemoveButtonModel } from "./model";
import { RemoveButtonLayout } from "./ui";

import { useRemoveToDo } from "../../../../features/removeToDo";

export const RemoveButton = ({ id, goToListPage }) => {
	const remove = useRemoveToDo();

	return (
		<div>
			<RemoveButtonModel
				RemoveButtonLayout={RemoveButtonLayout}
				remove={remove}
				id={id}
				goToListPage={goToListPage}
			/>
		</div>
	);
};
