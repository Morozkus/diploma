import { Drawer, IconButton, Divider, useTheme } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import HeaderDrawerContainer from './HeaderDrawerContainer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface HeaderDrawerProps {
    drawerWidth: number
    open: boolean
    handleDrawerClose: () => void
}

const HeaderDrawer: FC<PropsWithChildren<HeaderDrawerProps>> = ({ drawerWidth, open, children, handleDrawerClose }) => {
    const theme = useTheme();

    return <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }}
        variant="persistent"
        anchor="left"
        open={open}
    >
        <HeaderDrawerContainer>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </HeaderDrawerContainer>

        <Divider />

        {children}
    </Drawer>
}

export default HeaderDrawer