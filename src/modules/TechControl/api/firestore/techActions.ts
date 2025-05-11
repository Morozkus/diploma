import { getTechDocumentByPath } from "@/modules/TechControl/store/collection"
import { ITech } from "@/modules/TechControl/types/tech"
import { deleteDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { v4 } from "uuid"

export const setTech = (tech: Omit<ITech, "id"> & { id: string | undefined }) => {
    const id = tech.id ? tech.id : v4()
    const statusHistory = tech.status.id !== tech.statusHistory.at(-1)?.id ? [...tech.statusHistory, tech.status] : tech.statusHistory

    return setDoc(getTechDocumentByPath([id]), { ...tech, id, statusHistory, created_at: serverTimestamp() })
}

export const removeTech = (id: string) => {
    return deleteDoc(getTechDocumentByPath([id]))
}