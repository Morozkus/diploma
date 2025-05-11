import validateOrganization from "@/modules/OrganizationList/api/schema/OrganizationSchema"
import { organizationCollection } from "@/modules/OrganizationList/store/collection"
import { IOrganization } from "@/modules/OrganizationList/types"
import { DocumentReference } from "firebase/firestore"
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore"

export const useOrganizationsData = (): { data: IOrganization[], isLoading: boolean } => {
    const [organizations, isLoading] = useCollectionData(organizationCollection)

    if (!organizations) return { data: [], isLoading }

    return { data: organizations.filter((data) => validateOrganization(data)), isLoading }
}

export const useOrganization = (organizationRef: DocumentReference) => {
    const [organization] = useDocumentData(organizationRef)

    return validateOrganization(organization) ? organization : void 0
}