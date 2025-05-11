import { useCategory } from "@/modules/CategoryList/hooks/useCategoryData"
import { useOrganization } from "@/modules/OrganizationList/hooks/useOrganizationsData"
import { useStatus } from "@/modules/Status/hooks/useStatusData"
import { removeTech } from "@/modules/TechControl/api/firestore/techActions"
import TechModal from "@/modules/TechControl/components/TechModal/TechModal"
import { ITech } from "@/modules/TechControl/types/tech"
import { Modal } from "@/ui/Modal"
import { BodyText, HeaderText } from "@/ui/Text"
import { Button, Stack } from "@mui/material"
import { FC } from "react"

interface TechListItemProps {
    tech: ITech
}

const TechListItem: FC<TechListItemProps> = ({ tech }) => {

    const organization = useOrganization(tech.organization)
    const category = useCategory(tech.category)
    const status = useStatus(tech.status)

    const onTechRemove = () => removeTech(tech.id)

    return <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} border={"1px solid black"} padding={2}>
        <Stack flexBasis={"80%"} spacing={1}>
            <HeaderText>
                Название: {tech.title}
            </HeaderText>
            <BodyText>
                Организация: {organization?.name}
            </BodyText>
            <BodyText>
                Категория: {category?.name}
            </BodyText>
            <BodyText>
                Статус: {status?.name}
            </BodyText>
        </Stack>

        <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Button variant="outlined">Подробнее</Button>
            <TechModal trigger={<Button variant="outlined">Редактировать</Button>} tech={tech} />
            <Modal trigger={<Button variant="outlined">Удалить</Button>}>
                <BodyText textAlign={"center"}>Вы уверены, что хотите удалить запись о {tech.title} ?</BodyText>
                <Stack direction={"row"} justifyContent={"center"} mt={2}>
                    <Button onClick={onTechRemove}>Удалить</Button>
                    <Button>Отменить</Button>
                </Stack>
            </Modal>
        </Stack>

    </Stack>
}
export default TechListItem