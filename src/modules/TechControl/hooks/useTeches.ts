import { useCurrentCategoryId, useCurrentOrganizationId } from "@/global/router"
import { getCategoryDocumentByPath } from "@/modules/CategoryList/store/collection"
import { getOrganizationDocumentByPath } from "@/modules/OrganizationList/store/collection"
import validateTech from "@/modules/TechControl/api/schema/validateTech"
import { getTechQueryByFilters } from "@/modules/TechControl/store/collection"
import { ITech } from "@/modules/TechControl/types/tech"
import { where } from "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"

export const useTechesByOrganizationAndCategory = (): ITech[] => {
    const organization = useCurrentOrganizationId()
    const category = useCurrentCategoryId()

    const organizationFilter = organization ? where("organization", "==", getOrganizationDocumentByPath([organization])) : void 0
    const categoryFilter = category ? where("category", "==", getCategoryDocumentByPath([category])) : void 0

    const [teches] = useCollectionData(getTechQueryByFilters(categoryFilter, organizationFilter), { initialValue: [] })

    const validatedTeches = (teches ?? []).filter((tech) => validateTech(tech))

    return validatedTeches
}