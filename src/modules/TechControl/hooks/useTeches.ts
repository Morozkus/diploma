import {
    useCurrentCategoryId,
    useCurrentOrganizationId,
} from "@/global/router";
import { getCategoryDocumentByPath } from "@/modules/CategoryList/store/collection";
import { getOrganizationDocumentByPath } from "@/modules/OrganizationList/store/collection";
import validateTech from "@/modules/TechControl/api/schema/validateTech";
import { getTechQueryByFilters } from "@/modules/TechControl/store/collection";
import { ITech } from "@/global/types/entity/Tech";
import { where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useCurrentStatusId } from "@/global/router/hooks/useSearchParams";
import { getStatusDocumentByPath } from "@/modules/Status/api/firestore/collection";
import { useDebouncedSearchTechName } from "@/components/Drawer/hooks/useDebouncedSearchTechName";
import { useMemo } from "react";

export const useTechesByOrganizationAndCategory = (): [ITech[], boolean] => {
    const organization = useCurrentOrganizationId();
    const category = useCurrentCategoryId();
    const status = useCurrentStatusId();
    const name = useDebouncedSearchTechName();

    const filters = useMemo(() => {
        const organizationFilter = organization
            ? where(
                  "organization",
                  "==",
                  getOrganizationDocumentByPath([organization])
              )
            : void 0;
        const categoryFilter = category
            ? where("category", "==", getCategoryDocumentByPath([category]))
            : void 0;
        const statusFilter = status
            ? where("status", "==", getStatusDocumentByPath([status]))
            : void 0;
        const techSubnameStart = name ? where("title", ">=", name) : void 0;
        const techSubnameEnd = name
            ? where("title", "<=", name + "\uf8ff")
            : void 0;

        return [
            organizationFilter,
            categoryFilter,
            statusFilter,
            techSubnameEnd,
            techSubnameStart,
        ];
    }, [category, name, organization, status]);

    const [teches, loading] = useCollectionData(
        getTechQueryByFilters(...filters),
        { initialValue: [] }
    );

    const validatedTeches = (teches ?? []).filter((tech) => validateTech(tech));

    return [validatedTeches, loading];
};
