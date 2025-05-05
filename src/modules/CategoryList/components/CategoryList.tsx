import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { firebaseStore } from '@/global/firebase';

const CategoryList = () => {
    const [categories] = useCollectionData(collection(firebaseStore, "category"))

    return <List>
        {categories?.map((category) => (
            <ListItem key={category.name} disablePadding>
                <ListItemButton>
                    <ListItemText primary={category.name} />
                </ListItemButton>
            </ListItem>
        ))}

        <ListItem disablePadding>
            <ListItemButton onClick={() => void 0}>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary={"Добавить категорию"} />
            </ListItemButton>
        </ListItem>
    </List>
}

export default CategoryList