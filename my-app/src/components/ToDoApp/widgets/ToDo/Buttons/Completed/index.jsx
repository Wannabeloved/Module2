import { CompletedModel } from "./model";
import { CompletedLayout } from "./ui";

import { useEditToDo } from "../../../../features/editToDo";

export const Completed = ({
	isCurrentCompleted,
	setIsCurrentCompleted,
	otherCardInfo, // id, title, createdAt
}) => {
	const editToDo = useEditToDo();
	return (
		<CompletedModel
			CompletedLayout={CompletedLayout}
			editToDo={editToDo}
			{...{
				isCurrentCompleted,
				setIsCurrentCompleted,
				otherCardInfo,
			}}
		/>
	);
};
