import { lazy, Suspense, useState } from "react";
import Box from "@mui/material/Box";
import BaseLayout from "./BaseLayout";
import { HeaderBar } from "@/components/HeaderBar";
import { HeaderDrawer, HeaderDrawerContainer } from "@/components/Drawer";
import { OrganizationList } from "@/modules/OrganizationList";
import Teches from "@/pages/Teches";
import { Divider, Skeleton, Stack } from "@mui/material";

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
                drawerwidth={DRAWER_WIDTH}
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
            drawerwidth={DRAWER_WIDTH}
            open={open}
            handleDrawerOpen={onDrawerOpen}
        >
            <OrganizationList />
        </HeaderBar>
    );
};

const LazyLeftDrawerContent = lazy(() => import("./LeftDrawerContent"));

const LeftDrawer = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) => {
    return (
        <HeaderDrawer
            drawerwidth={DRAWER_WIDTH}
            open={open}
            handleDrawerClose={onClose}
        >
            {open ? (
                <Suspense fallback={<DrawerFallback />}>
                    <LazyLeftDrawerContent />
                </Suspense>
            ) : null}
        </HeaderDrawer>
    );
};

const DrawerFallback = () => {
    return (
        <Stack>
            <Skeleton height={200} />
            <Divider />
            <Skeleton height={200} />
        </Stack>
    );
};

export default BasePageView;
