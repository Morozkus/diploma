import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { firebaseStore } from '@/global/firebase';

const OrganizationList = () => {
    const [organizations] = useCollectionData(collection(firebaseStore, "organization"))

    return <Stack direction={"row"} gap={"1vw"} paddingRight={"1vw"}>
        {organizations?.map((organization) => (
            <ListItem key={organization.name} style={{ width: "auto" }} disablePadding>
                <ListItemButton>
                    <ListItemText style={{ textWrap: "nowrap" }} primary={organization.name as string} />
                </ListItemButton>
            </ListItem>
        ))}
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary={"Добавить организацию"} />
            </ListItemButton>
        </ListItem>
    </Stack>
}

export default OrganizationList