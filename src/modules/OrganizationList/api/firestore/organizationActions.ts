import { getOrganizationDocumentByPath, organizationCollection } from "@/modules/OrganizationList/store/collection"
import { updateDoc, deleteDoc, setDoc, doc } from "firebase/firestore"
import { v4 } from "uuid"

export const addOrganization = (name: string) => {
    const id = v4()

    return setDoc(doc(organizationCollection, id), { id, name })
}

export const updateOrganization = (id: string, name: string) => updateDoc(getOrganizationDocumentByPath([id]), { name })

export const removeOrganization = (id: string) => deleteDoc(getOrganizationDocumentByPath([id]))