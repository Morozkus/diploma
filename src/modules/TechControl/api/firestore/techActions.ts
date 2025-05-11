import { getTechDocumentByPath } from "@/modules/TechControl/store/collection"
import { ITech } from "@/modules/TechControl/types/tech"
import { deleteDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { v4 } from "uuid"

export const setTech = (tech: Omit<ITech, "id"> & {id: string | undefined}) => {
    const id = tech.id ? tech.id : v4()

    return setDoc(getTechDocumentByPath([id]), { ...tech, id, created_at: serverTimestamp() })
}

export const removeTech = (id: string) => {
    return deleteDoc(getTechDocumentByPath([id]))
}