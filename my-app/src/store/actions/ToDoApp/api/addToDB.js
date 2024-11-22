import { post } from "./../../../../shared/api/post";

export const addToDB = async (data) => {
	delete data.isNew;
	console.log("DATA!!!", data);
	const res = await post("todolist", { ...data });
	console.log("RES::", res);
};
