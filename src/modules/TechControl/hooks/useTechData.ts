import { ITech } from "@/global/types/entity/Tech";
import { useCategory } from "@/modules/CategoryList/hooks/useCategoryData";
import { useOrganization } from "@/modules/OrganizationList/hooks/useOrganizationsData";
import { useStatus } from "@/modules/Status/hooks/useStatusData";

export const useTechData = (tech: ITech) => {
        const organization = useOrganization(tech.organization)
        const category = useCategory(tech.category)
        const status = useStatus(tech.status)

        return {
            organization: organization ?? {name: "Недоступная организация"},
            category: category ?? {name: "Недоступная категория"},
            status: status ?? {name: "Неизвестный статус"}
        }
}