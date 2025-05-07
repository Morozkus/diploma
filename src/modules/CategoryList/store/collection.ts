import { firebaseStore } from "@/global/firebase";
import { CATEGORY_COLLECTION_NAME } from "@/modules/CategoryList/consts/collection";
import { collection, doc } from "firebase/firestore";

export const categoryCollection = collection(firebaseStore, CATEGORY_COLLECTION_NAME)

export const getCategoryDocumentByPath = (path: string[]) => doc(categoryCollection, ...path)