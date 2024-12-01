import { post } from "../../../shared/api/post";
export const useSendToDB = () => {
	return async (data) => {
		const newToDo = { ...data };
		delete newToDo.id;
		newToDo.completed = false;

		const res = await post("todolist", newToDo);
		return res;
	};
};
