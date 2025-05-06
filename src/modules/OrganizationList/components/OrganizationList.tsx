import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { firebaseStore } from '@/global/firebase';
import OrganizationCreateModal from "@/modules/OrganizationList/components/OrganizationCreateModal";

const OrganizationList = () => {
    const [organizations] = useCollectionData(collection(firebaseStore, "organization"))
    console.log(organizations)
    return <Stack direction={"row"} gap={"1vw"} paddingRight={"1vw"}>
        {organizations?.map((organization) => (
            <ListItem key={organization.name} style={{ width: "auto" }} disablePadding>
                <ListItemButton>
                    <ListItemText style={{ textWrap: "nowrap" }} primary={organization.name as string} />
                </ListItemButton>
            </ListItem>
        ))}
        <OrganizationCreateModal />
    </Stack>
}

export default OrganizationList