
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FC, ReactNode } from 'react';

interface ListButtonProps {
    text: string
    icon?: ReactNode
    onClick?: () => void
}

const ListButton: FC<ListButtonProps> = ({ text, icon, onClick }) => {
    return <ListItem disablePadding>
        <ListItemButton onClick={onClick}>
            {
                icon
                    ? <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    : null
            }
            <ListItemText primary={text} />
        </ListItemButton>
    </ListItem>
}
export default ListButton