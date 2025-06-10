import {
    useCurrentStatusId,
    useSetSearchParams,
} from "@/global/router/hooks/useSearchParams";
import { IStatus } from "@/global/types/entity/Status";
import { useStatuses } from "@/modules/Status/hooks/useStatusData";
import BlockSkeleton from "@/ui/Skeleton/BlockSkeleton";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FC, memo } from "react";

const StatusList = () => {
    const { data: categories, isLoading } = useStatuses();
    const activeStatus = useCurrentStatusId();
    const setActiveCategory = useSetSearchParams();

    const onStatusSelect = (statusId: string) =>
        setActiveCategory("status", statusId);

    if (isLoading) {
        return <BlockSkeleton />;
    }

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => onStatusSelect("")}
                    selected={!activeStatus}
                >
                    <ListItemText primary={"Любой статус"} />
                </ListItemButton>
            </ListItem>

            {categories.map((status) => (
                <StatusItem
                    key={status.id}
                    status={status}
                    isActive={activeStatus === status.id}
                    onSelect={onStatusSelect}
                />
            ))}
        </List>
    );
};

interface StatusItemProps {
    status: IStatus;
    isActive: boolean;
    onSelect: (statusId: string) => void;
}

const StatusItem: FC<StatusItemProps> = memo(
    ({ status, isActive, onSelect }) => {
        const onClick = () => onSelect(status.id);

        return (
            <ListItem disablePadding>
                <ListItemButton onClick={onClick} selected={isActive}>
                    <ListItemText primary={status.name} />
                </ListItemButton>
            </ListItem>
        );
    }
);

export default StatusList;
