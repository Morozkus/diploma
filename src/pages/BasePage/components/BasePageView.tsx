import { useState } from "react";
import Box from "@mui/material/Box";
import BaseLayout from "./BaseLayout";
import { HeaderBar } from "@/components/HeaderBar";
import { HeaderDrawer, HeaderDrawerContainer } from "@/components/Drawer";
import { CategoryList } from "@/modules/CategoryList";
import { OrganizationList } from "@/modules/OrganizationList";
import Teches from "@/pages/Teches";
import StatusList from "@/modules/Status/components/StatusList";
import { Divider } from "@mui/material";

const DRAWER_WIDTH = 320;

const BasePageView = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const closeDrawerOnOutsideClick = () =>
        open ? handleDrawerClose() : void 0;

    return (
        <Box sx={{ display: "flex", height: "100dvh", overflowX: "hidden" }}>
            <Header open={open} onDrawerOpen={handleDrawerOpen} />
            <LeftDrawer open={open} onClose={handleDrawerClose} />
            <BaseLayout
                onClick={closeDrawerOnOutsideClick}
                drawerWidth={DRAWER_WIDTH}
                sx={{
                    paddingLeft: open ? DRAWER_WIDTH + "px" : void 0,
                }}
            >
                <HeaderDrawerContainer />
                <Teches />
            </BaseLayout>
        </Box>
    );
};

const Header = ({
    open,
    onDrawerOpen,
}: {
    open: boolean;
    onDrawerOpen: () => void;
}) => {
    return (
        <HeaderBar
            drawerWidth={DRAWER_WIDTH}
            open={open}
            handleDrawerOpen={onDrawerOpen}
        >
            <OrganizationList />
        </HeaderBar>
    );
};

const LeftDrawer = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) => {
    return (
        <HeaderDrawer
            drawerWidth={DRAWER_WIDTH}
            open={open}
            handleDrawerClose={onClose}
        >
            <StatusList />
            <Divider />
            <CategoryList />
        </HeaderDrawer>
    );
};

export default BasePageView;
