import { push } from "firebase/database";
export function funcForSendToDB({ createRef }) {
	return async (data) => {
		delete data.isNew;
		console.log("DATA!!!", data);
		await push(createRef("todos"), { ...data });
	};
}
