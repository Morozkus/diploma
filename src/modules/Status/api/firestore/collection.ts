import { firebaseStore } from "@/global/firebase";
import { STATUS_COLLECTION_NAME } from "@/modules/Status/consts/status";
import { collection, doc } from "firebase/firestore";

export const statusCollection = collection(firebaseStore, STATUS_COLLECTION_NAME)

export const getStatusDocumentByPath = (path: string[]) => doc(statusCollection, ...path)