import validateOrganization from "@/modules/OrganizationList/api/schema/OrganizationSchema"
import { organizationCollection } from "@/modules/OrganizationList/store/collection"
import { IOrganization } from "@/modules/OrganizationList/types"
import { useCollectionData } from "react-firebase-hooks/firestore"

export const useOrganizationsData = (): { data: IOrganization[], isLoading: boolean } => {
    const [organizations, isLoading] = useCollectionData(organizationCollection)

    if (!organizations) return { data: [], isLoading }

    return { data: organizations.filter((data) => validateOrganization(data)), isLoading }
}