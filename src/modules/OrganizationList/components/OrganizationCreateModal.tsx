import { ListButton } from '@/components/HeaderList';
import { useOrganizationFormAddAction } from "@/modules/OrganizationList/hooks/useOrganizationFormSubmitActions";
import { Modal } from "@/ui/Modal";
import { HeaderText } from "@/ui/Text";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const OrganizationCreateModal = () => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const { fieldNames, onSubmit } = useOrganizationFormAddAction(() => setPopoverOpen(false))

    return <Modal
        trigger={<ListButton text='Добавить организацию' />}
        closeOnInnerClick={false}
        opened={popoverOpen}
        onChangeOpened={setPopoverOpen}
    >
        <Stack component={"form"} action={onSubmit} sx={{ gap: 1 }}>
            <HeaderText fontSize={24}>
                Создание организации
            </HeaderText>
            <TextField
                name={fieldNames.organizationNameInput}
                id="standard-basic"
                label="Название организации"
                variant="standard"
                fullWidth
            />
            <Button type="submit" variant="contained" sx={{ mt: 4 }}>Создать</Button>
        </Stack>
    </Modal>
}

export default OrganizationCreateModal