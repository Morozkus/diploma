import { ITech } from "@/global/types/entity/Tech"
import { getTechDocumentByPath } from "@/modules/TechControl/store/collection"
import { deleteDoc, setDoc } from "firebase/firestore"
import { v4 } from "uuid"

export const setTech = (tech: Omit<ITech, "id"> & { id: string | undefined }) => {
    const id = tech.id ? tech.id : v4()
    const statusHistory = tech.status.id !== tech.statusHistory.at(-1)?.id ? [...tech.statusHistory, tech.status] : tech.statusHistory

    return setDoc(getTechDocumentByPath([id]), { ...tech, id, statusHistory, created_at: new Date().toLocaleDateString() })
}

export const removeTech = (id: string) => {
    return deleteDoc(getTechDocumentByPath([id]))
}