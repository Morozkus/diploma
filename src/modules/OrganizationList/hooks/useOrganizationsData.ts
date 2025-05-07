import validateOrganization from "@/modules/OrganizationList/api/schema/OrganizationSchema"
import { organizationCollection } from "@/modules/OrganizationList/store/collection"
import { IOrganization } from "@/modules/OrganizationList/types"
import { useCollectionData } from "react-firebase-hooks/firestore"

export const useOrganizationsData = (): IOrganization[] => {
    const [organizations] = useCollectionData(organizationCollection)

    if (!organizations) return []

    return organizations.filter((data) => validateOrganization(data))
}