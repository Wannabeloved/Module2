import { post } from "./../../../../shared/api/post";

export const addToDB = async (data) => {
	delete data.id;
	const res = await post("todolist", { ...data });
};
