import { statusCollection } from "@/modules/Status/api/firestore/collection"
import validateStatus from "@/modules/Status/api/schema/validateStatus"
import { DocumentReference } from "firebase/firestore"
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore"

export const useStatuses = () => {
    const [statuses, isLoading] = useCollectionData(statusCollection)

    const validatedStatuses = (statuses ?? []).filter((status) => validateStatus(status))

    return { data: validatedStatuses, isLoading }
}

export const useStatus = (statusRef: DocumentReference) => {
    const [status] = useDocumentData(statusRef)

    return validateStatus(status) ? status : void 0
}