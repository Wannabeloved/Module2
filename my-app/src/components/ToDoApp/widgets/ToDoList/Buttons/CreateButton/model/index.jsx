import { useNavigate } from "react-router-dom";

export const CreateButtonModel = ({ CreateButtonLayout }) => {
	const navigate = useNavigate();
	const handleCreate = () => {
		navigate("task/create");
	};

	return <CreateButtonLayout onClick={handleCreate} />;
};
