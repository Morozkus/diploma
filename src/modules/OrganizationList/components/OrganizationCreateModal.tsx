import { ListButton } from '@/components/HeaderList';
import { useOrganizationsActions } from "@/modules/OrganizationList/hooks/useOrganizationActions";
import { Modal } from "@/ui/Modal";
import { HeaderText } from "@/ui/Text";
import { Button, Stack, TextField } from "@mui/material";
import { useActionState, useState } from "react";

const OrganizationCreateModal = () => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const { addOrganization } = useOrganizationsActions()

    const [, onSubmit] = useActionState(
        async (_prevState: null, formData: FormData) => {
            const name = formData.get("organizationName") as string

            if (name.trim().length) {
                await addOrganization(name)
                setPopoverOpen(false)
            }

            return null
        },
        null
    )

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
                name="organizationName"
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