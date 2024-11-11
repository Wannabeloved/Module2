import { Link } from "react-router-dom";

export const ToDoModel = ({ taskInfo, ToDoLayout }) => {
	const { id } = taskInfo;

	return (
		<li>
			<Link to={`task/${id}`}>
				<ToDoLayout taskInfo={taskInfo} />
			</Link>
		</li>
	);
};
