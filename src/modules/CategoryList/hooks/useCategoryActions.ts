import { categoryCollection, getCategoryDocumentByPath } from "@/modules/CategoryList/store/collection"
import { updateDoc, deleteDoc, setDoc, doc } from "firebase/firestore"
import { v4 } from "uuid"

export const useCategoryActions = () => {
    const addCategory = (name: string) => {
        const id = v4()

        return setDoc(doc(categoryCollection, id), { id, name })
    }

    const updateCategory = (id: string, name: string) => updateDoc(getCategoryDocumentByPath([id]), { name })

    const removeCategory = (id: string) => deleteDoc(getCategoryDocumentByPath([id]))

    return {
        addCategory,
        updateCategory,
        removeCategory
    }
}