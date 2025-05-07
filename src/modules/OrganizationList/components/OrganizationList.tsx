import { Stack } from '@mui/material';
import OrganizationCreateModal from "@/modules/OrganizationList/components/OrganizationCreateModal";
import { useOrganizationsData } from "@/modules/OrganizationList/hooks/useOrganizationsData";
import { memo } from "react";
import OrganizationItem from "@/modules/OrganizationList/components/OrganizationItem";

const OrganizationList = memo(() => {
    const organizations = useOrganizationsData()

    return <Stack direction={"row"} gap={"1vw"} paddingRight={"1vw"}>
        {
            organizations.map((organization) => <OrganizationItem organization={organization} />)
        }
        <OrganizationCreateModal />
    </Stack>
})

export default OrganizationList