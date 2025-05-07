import { useOrganizationsActions } from "@/modules/OrganizationList/hooks/useOrganizationActions";
import { IOrganization } from "@/modules/OrganizationList/types";
import { Modal } from "@/ui/Modal";
import { HeaderText } from "@/ui/Text";
import { Button, ListItem, ListItemButton, ListItemText, Stack, TextField } from "@mui/material";
import { FC, useActionState, useState } from "react";

interface OrganizationControlModalProps {
    organization: IOrganization
}

const OrganizationControlModal: FC<OrganizationControlModalProps> = ({ organization }) => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const { updateOrganization, removeOrganization } = useOrganizationsActions()

    const [, onSubmit] = useActionState(
        async (_prevState: null, formData: FormData) => {
            const name = formData.get("organizationName") as string

            if (name.trim().length) {
                await updateOrganization(organization.id, name)

                setPopoverOpen(false)
            }

            return null
        },
        null
    )

    const onRemove = async () => {
        await removeOrganization(organization.id)

        setPopoverOpen(false)
    }

    return <Modal
        trigger={
            <ListItem key={organization.name} style={{ width: "auto" }} disablePadding>
                <ListItemButton>
                    <ListItemText style={{ textWrap: "nowrap" }} primary={organization.name} />
                </ListItemButton>
            </ListItem>
        }
        closeOnInnerClick={false}
        opened={popoverOpen}
        onChangeOpened={setPopoverOpen}
        triggerContainerStyles={{ justifyContent: "center" }}
    >
        <Stack component={"form"} action={onSubmit} sx={{ gap: 1 }}>
            <HeaderText fontSize={24}>
                Управление организацией
            </HeaderText>
            <TextField
                defaultValue={organization.name}
                name="organizationName"
                id="standard-basic"
                label="Название организации"
                variant="standard"
                fullWidth
            />
            <Stack flexDirection="row" sx={{ mt: 4, gap: 2 }}>
                <Button type="submit" variant="contained">Переименовать</Button>
                <Button variant="contained" onClick={onRemove}>Удалить</Button>
            </Stack>
        </Stack>
    </Modal>
}

export default OrganizationControlModal