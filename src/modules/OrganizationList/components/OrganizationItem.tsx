import { useOrganizationsActions } from "@/modules/OrganizationList/hooks/useOrganizationActions";
import { isNotEmptyValue } from "@/modules/OrganizationList/lib/utils";
import { IOrganization } from "@/modules/OrganizationList/types";
import { Modal } from "@/ui/Modal";
import { HeaderText } from "@/ui/Text";
import { Button, ListItem, ListItemButton, ListItemText, Stack, TextField } from "@mui/material";
import { FC, useActionState, useState } from "react";

interface OrganizationItemProps {
	organization: IOrganization
	isActive: boolean
	onSelect: () => void
}

const OrganizationItem: FC<OrganizationItemProps> = ({ organization, isActive, onSelect }) => {
	const [popoverOpen, setPopoverOpen] = useState(false)

	const { updateOrganization, removeOrganization } = useOrganizationsActions()

	const [, onSubmit] = useActionState(
		(_: null, formData: FormData) => {
			const name = formData.get("organizationName") as string

			if (isNotEmptyValue(name)) updateOrganization(organization.id, name)
					

			return null
		},
		null
	)

	const onRemove = () => removeOrganization(organization.id)

	return <Modal
		trigger={
			<ListItem style={{ width: "auto", background: isActive ? "gray" : void 0 }} disablePadding>
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
			<Stack onClick={() => setPopoverOpen(false)} flexDirection="row" sx={{ mt: 4, gap: 2 }}>
			<Button variant="contained" onClick={onSelect}>Выбрать</Button>
				<Button type="submit" variant="contained">Переименовать</Button>
				<Button variant="contained" onClick={onRemove}>Удалить</Button>
			</Stack>
		</Stack>
	</Modal>
}

export default OrganizationItem