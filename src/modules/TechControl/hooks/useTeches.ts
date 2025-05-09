import { useCurrentCategoryId, useCurrentOrganizationId } from "@/global/router"
import validateTech from "@/modules/TechControl/api/schema/validateTech"
import { techCollection } from "@/modules/TechControl/store/collection"
import { ITech } from "@/modules/TechControl/types/tech"
import { query, where } from "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"

export const useTechesByOrganizationAndCategory = (): ITech[] => {
    const organization = useCurrentOrganizationId()
    const category = useCurrentCategoryId()

    const organizationFilter = organization ? where("organization", "==", organization) : where("organization", "!=", null)
    const categoryFilter = category ? where("category", "==", category) : where("category", "!=", null)

    const teches = useCollectionData(query(
        techCollection,
        organizationFilter,
        categoryFilter
    ))

    const validatedTeches = teches.filter((tech) => validateTech(tech))

    return validatedTeches
}