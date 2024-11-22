import { post } from "../../../shared/api/post";

export const funcForEditInDB = (post) => async (id, payload, options) => {
	const res = await post(`todolist/${id}`, payload, {
		...options,
		method: "PUT",
	});
	return res;
};
export const useEditInDB = funcForEditInDB(post);
