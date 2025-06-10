import { Box, Toolbar, IconButton } from "@mui/material";
import HeaderBarContainer from "./HeaderBarContainer";
import { FC, PropsWithChildren } from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderBarProps {
    drawerwidth: number;
    open: boolean;
    handleDrawerOpen: () => void;
}

const HeaderBar: FC<PropsWithChildren<HeaderBarProps>> = ({
    drawerwidth,
    open,
    children,
    handleDrawerOpen,
}) => {
    return (
        <HeaderBarContainer
            drawerwidth={drawerwidth}
            position="fixed"
            open={open}
        >
            <Box overflow={"auto"}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: "none" },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>

                    {children}
                </Toolbar>
            </Box>
        </HeaderBarContainer>
    );
};

export default HeaderBar;
