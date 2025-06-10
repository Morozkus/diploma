import { useState } from "react";
import Box from "@mui/material/Box";
import BaseLayout from "./BaseLayout";
import { HeaderBar } from "@/components/HeaderBar";
import { HeaderDrawer, HeaderDrawerContainer } from "@/components/Drawer";
import { CategoryList } from "@/modules/CategoryList";
import { OrganizationList } from "@/modules/OrganizationList";
import Teches from "@/pages/Teches";

const DRAWER_WIDTH = 320;

const BasePageView = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <HeaderBar
                drawerWidth={DRAWER_WIDTH}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            >
                <OrganizationList />
            </HeaderBar>
            <HeaderDrawer
                drawerWidth={DRAWER_WIDTH}
                open={open}
                handleDrawerClose={handleDrawerClose}
            >
                <CategoryList />
            </HeaderDrawer>
            <BaseLayout drawerWidth={DRAWER_WIDTH}>
                <HeaderDrawerContainer />
                <Teches />
            </BaseLayout>
        </Box>
    );
};

export default BasePageView;
