import { CompletedModel } from "./model";
import { CompletedLayout } from "./ui";

export const Completed = ({ id, patchCurrentTask }) => {
	return (
		<CompletedModel
			CompletedLayout={CompletedLayout}
			{...{
				id,
				patchCurrentTask,
			}}
		/>
	);
};
