import { ref } from "firebase/database";
import { db } from "../../../../firebase";

export const createRef = (path) => ref(db, path);
