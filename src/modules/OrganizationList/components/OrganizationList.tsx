import { Stack } from '@mui/material';
import OrganizationCreateModal from "@/modules/OrganizationList/components/OrganizationCreateModal";
import { useOrganizationsData } from "@/modules/OrganizationList/hooks/useOrganizationsData";
import { memo } from "react";
import OrganizationItem from "@/modules/OrganizationList/components/OrganizationItem";
import { useCurrentOrganizationId, useSearchParamsSet } from '@/global/router';

const OrganizationList = memo(() => {
    const organizations = useOrganizationsData()
    const activeOrganization = useCurrentOrganizationId()
    const setActiveOrganization = useSearchParamsSet()

    return <Stack direction={"row"} gap={"1vw"} paddingRight={"1vw"}>
        {
            organizations.map((organization) => <OrganizationItem
                key={organization.id}
                organization={organization}
                isActive={activeOrganization === organization.id}
                onSelect={() => setActiveOrganization("organization", organization.id)}
            />
            )
        }
        <OrganizationCreateModal />
    </Stack>
})

export default OrganizationList