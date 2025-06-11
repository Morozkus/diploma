import { ITech, ITechData } from "@/global/types/entity/Tech";
import {
    useCategory,
    useCategoryData,
} from "@/modules/CategoryList/hooks/useCategoryData";
import {
    useOrganization,
    useOrganizationsData,
} from "@/modules/OrganizationList/hooks/useOrganizationsData";
import { useStatus, useStatuses } from "@/modules/Status/hooks/useStatusData";
import { useMemo } from "react";

const getMapFromEntity = <T extends { name: string; id: string }>(
    entity: T[]
): Map<string, { name: string }> =>
    new Map(entity.map(({ id, name }) => [id, { name }]));

const getEnityName = (
    entity: { name: string } | undefined,
    defaultName: string
): { name: string } => entity ?? { name: defaultName };

export const useTechesData = (teches: ITech[]): Array<ITechData> => {
    const { data: organizations } = useOrganizationsData();
    const { data: categories } = useCategoryData();
    const { data: statuses } = useStatuses();

    const { organizationsMap, categoriesMap, statusesMap } = useMemo(() => {
        const organizationsMap = getMapFromEntity(organizations);
        const categoriesMap = getMapFromEntity(categories);
        const statusesMap = getMapFromEntity(statuses);

        return {
            organizationsMap,
            categoriesMap,
            statusesMap,
        };
    }, [categories, organizations, statuses]);

    return useMemo(() => {
        return teches.map((tech) => ({
            ...tech,
            organization: getEnityName(
                organizationsMap.get(tech.organization.id),
                "Неизвестная организация"
            ),
            category: getEnityName(
                categoriesMap.get(tech.category.id),
                "Неизвестная категория"
            ),
            status: getEnityName(
                statusesMap.get(tech.status.id),
                "Неизвестная категория"
            ),
        }));
    }, [categoriesMap, organizationsMap, statusesMap, teches]);
};

export const useTechData = (tech: ITech) => {
    const organization = useOrganization(tech.organization);
    const category = useCategory(tech.category);
    const status = useStatus(tech.status);

    return {
        organization: getEnityName(organization, "Недоступная организация"),
        category: getEnityName(category, "Недоступная категория"),
        status: getEnityName(status, "Неизвестный статус"),
    };
};
