import { post } from "../../../shared/api/post";

export const useEditInDB = funcForEditInDB(post);
function funcForEditInDB(post) {
	return () => async (id, payload, options) => {
		const res = await post(`todolist/${id}`, payload, {
			...options,
			method: "PUT",
		});
		return res;
	};
}
