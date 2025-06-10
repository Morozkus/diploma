import { Drawer, IconButton, Divider, Tooltip } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import HeaderDrawerContainer from "./HeaderDrawerContainer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HeaderDrawerViewSettings from "@/components/Drawer/components/HeaderDrawerViewSettings";

interface HeaderDrawerProps {
    drawerWidth: number;
    open: boolean;
    handleDrawerClose: () => void;
}

const HeaderDrawer: FC<PropsWithChildren<HeaderDrawerProps>> = ({
    drawerWidth,
    open,
    children,
    handleDrawerClose,
}) => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <HeaderDrawerContainer style={{ justifyContent: "space-between" }}>
                <HeaderDrawerViewSettings />

                <Tooltip title="Скрыть боковую панель">
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Tooltip>
            </HeaderDrawerContainer>

            <Divider />

            {children}
        </Drawer>
    );
};

export default HeaderDrawer;
