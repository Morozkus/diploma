import { firebaseStore } from "@/global/firebase"
import { TECH_COLLECTION_NAME } from "@/modules/TechControl/consts/tech"
import { collection, doc } from "firebase/firestore"

export const techCollection = collection(firebaseStore, TECH_COLLECTION_NAME)

export const getTechDocumentByPath = (path: string[]) => doc(techCollection, ...path)