import { CompletedModel } from "./model";
import { CompletedLayout } from "./ui";

export const Completed = ({
	id,
	isCurrentCompleted,
	setIsCurrentCompleted,
	putToDo,
	createdAt,
	title,
}) => {
	return (
		<CompletedModel
			CompletedLayout={CompletedLayout}
			{...{
				id,
				isCurrentCompleted,
				setIsCurrentCompleted,
				putToDo,
				createdAt,
				title,
			}}
		/>
	);
};
