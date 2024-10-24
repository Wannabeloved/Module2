import { remove } from "firebase/database";
import { createRef } from "../../../shared/api/createRef";

export const removeFromDB = (id) => {
	remove(createRef(`todos/${id}`));
};
