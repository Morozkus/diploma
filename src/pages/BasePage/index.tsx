import { useState } from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import { HeaderBar } from '@/components/HeaderBar';
import { HeaderDrawer, HeaderDrawerContainer } from '@/components/Drawer';
import { CategoryList } from '@/modules/CategoryList';
import { OrganizationList } from '@/modules/OrganizationList';

const drawerWidth = 320;

const BasePage = () => {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return <Box sx={{ display: 'flex' }}>
		<HeaderBar drawerWidth={drawerWidth} open={open} handleDrawerOpen={handleDrawerOpen}>
			<OrganizationList />
		</HeaderBar>
		<HeaderDrawer drawerWidth={drawerWidth} open={open} handleDrawerClose={handleDrawerClose}>
			<CategoryList />
		</HeaderDrawer>
		<BaseLayout drawerWidth={drawerWidth}>
			<HeaderDrawerContainer />
			<Outlet />
		</BaseLayout>
	</Box>
}

export default BasePage