import { useNavigate } from "react-router-dom";

export const CreateButtonModel = ({
	addNewToDo,
	somethingIsEditing,
	CreateButtonLayout,
}) => {
	const navigate = useNavigate();
	const handleCreate = () => {
		if (!somethingIsEditing) {
			addNewToDo();
			navigate("task/create");
		}
	};

	return (
		<CreateButtonLayout onClick={handleCreate} disabled={somethingIsEditing} />
	);
};
