import { ListButton } from '@/components/HeaderList';
import { Modal } from "@/ui/Modal";
import { Box, TextField } from "@mui/material";

const OrganizationCreateModal = () => {
    return <Modal trigger={<ListButton text='Добавить организацию' />}>
        <form>
            <Box onClick={(event) => event.stopPropagation()}>
                <TextField id="standard-basic" label="Название организации" variant="standard" fullWidth />
            </Box>
        </form>
    </Modal>
}
export default OrganizationCreateModal