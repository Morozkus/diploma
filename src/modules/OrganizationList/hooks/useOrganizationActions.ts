import { getOrganizationDocumentByPath, organizationCollection } from "@/modules/OrganizationList/store/collection"
import { updateDoc, deleteDoc, setDoc, doc } from "firebase/firestore"
import { v4 } from "uuid"

export const useOrganizationsActions = () => {
    const addOrganization = (name: string) => {
        const id = v4()

        return setDoc(doc(organizationCollection, id), { id, name })
    }

    const updateOrganization = (id: string, name: string) => updateDoc(getOrganizationDocumentByPath([id]), { name })

    const removeOrganization = (id: string) => deleteDoc(getOrganizationDocumentByPath([id]))

    return {
        addOrganization,
        updateOrganization,
        removeOrganization
    }
}