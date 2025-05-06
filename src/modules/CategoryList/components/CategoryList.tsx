import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { firebaseStore } from '@/global/firebase';
import CategoryCreateModal from "@/modules/CategoryList/components/CategoryCreateModal";

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

        <CategoryCreateModal />
    </List>
}

export default CategoryList