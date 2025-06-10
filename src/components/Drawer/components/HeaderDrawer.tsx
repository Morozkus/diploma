import { Drawer, IconButton, Divider, Tooltip, Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import HeaderDrawerContainer from "./HeaderDrawerContainer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HeaderDrawerViewSettings from "@/components/Drawer/components/HeaderDrawerViewSettings";
import HeaderDrawerSearchTechInput from "@/components/Drawer/components/HeaderDrawerSearchTechInput";

interface HeaderDrawerProps {
    drawerwidth: number;
    open: boolean;
    handleDrawerClose: () => void;
}

const HeaderDrawer: FC<PropsWithChildren<HeaderDrawerProps>> = ({
    drawerwidth,
    open,
    children,
    handleDrawerClose,
}) => {
    return (
        <Drawer
            sx={{
                width: drawerwidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerwidth,
                    boxSizing: "border-box",
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <Stack>
                <HeaderDrawerContainer
                    style={{ justifyContent: "space-between" }}
                >
                    <HeaderDrawerViewSettings />

                    <Tooltip title="Скрыть боковую панель">
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Tooltip>
                </HeaderDrawerContainer>

                <HeaderDrawerContainer>
                    <HeaderDrawerSearchTechInput />
                </HeaderDrawerContainer>
            </Stack>

            <Divider />

            {children}
        </Drawer>
    );
};

export default HeaderDrawer;
