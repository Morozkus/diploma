import { getTechDocumentByPath } from "@/modules/TechControl/store/collection"
import { ITech } from "@/modules/TechControl/types/tech"
import { deleteDoc, setDoc, updateDoc } from "firebase/firestore"
import { v4 } from "uuid"

export const addTech = (tech: Omit<ITech, "id">) => {
    const id = v4()

    return setDoc(getTechDocumentByPath([id]), tech)
}

export const updateTech = (tech: Partial<ITech> & { id: string }) => {
    return updateDoc(getTechDocumentByPath([tech.id]), tech)
}

export const removeTech = (id: string) => {
    return deleteDoc(getTechDocumentByPath([id]))
}