import { OpenToDoModel } from "./model";
import { OpenToDoLayout } from "./ui";

import { OpenButtons } from "./Open/OpenButtons";
import { CreateButtons } from "./CreateButtons";

import { Title } from "./Title";

export const OpenToDo = () => {
	return (
		<OpenToDoModel
			OpenToDoLayout={OpenToDoLayout}
			allButtons={{ OpenButtons, CreateButtons }}
			Title={Title}
		/>
	);
};
