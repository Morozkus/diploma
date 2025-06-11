import { ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import OrganizationCreateModal from "@/modules/OrganizationList/components/OrganizationCreateModal";
import { useOrganizationsData } from "@/modules/OrganizationList/hooks/useOrganizationsData";
import { memo } from "react";
import OrganizationItem from "@/modules/OrganizationList/components/OrganizationItem";
import { useCurrentOrganizationId, useSetSearchParams } from "@/global/router";
import BlockSkeleton from "@/ui/Skeleton/BlockSkeleton";

const OrganizationList = memo(() => {
    const { data: organizations, isLoading } = useOrganizationsData();
    const activeOrganization = useCurrentOrganizationId();
    const setActiveOrganization = useSetSearchParams();

    if (isLoading) {
        return <BlockSkeleton />;
    }

    return (
        <Stack direction={"row"} gap={"1vw"} paddingRight={"1vw"}>
            <OrganizationCreateModal />

            <ListItem style={{ width: "auto" }} disablePadding>
                <ListItemButton
                    onClick={() => setActiveOrganization("organization", "")}
                    sx={{ background: activeOrganization ? void 0 : "gray" }}
                >
                    <ListItemText
                        style={{ textWrap: "nowrap" }}
                        primary={"Все организации"}
                    />
                </ListItemButton>
            </ListItem>

            {organizations.map((organization) => (
                <OrganizationItem
                    key={organization.id}
                    organization={organization}
                    isActive={activeOrganization === organization.id}
                    onSelect={() =>
                        setActiveOrganization("organization", organization.id)
                    }
                />
            ))}
        </Stack>
    );
});

export default OrganizationList;
