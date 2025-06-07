import { removeTech } from "@/modules/TechControl/api/firestore/techActions";
import TechModal from "@/modules/TechControl/components/TechModal/TechModal";
import { ITech } from "@/global/types/entity/Tech";
import { Modal } from "@/ui/Modal";
import { BodyText, HeaderText } from "@/ui/Text";
import { Button, Stack } from "@mui/material";
import { FC, memo } from "react";
import { useTechData } from "@/modules/TechControl/hooks/useTechData";

interface TechListItemProps {
    tech: ITech;
}

const TechListItem: FC<TechListItemProps> = memo(({ tech }) => {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            border={"1px solid black"}
            padding={2}
        >
            <TechInfo tech={tech} />
            <ControlPanel tech={tech} />
        </Stack>
    );
});

const TechInfo: FC<TechListItemProps> = ({ tech }) => {
    const { category, organization, status } = useTechData(tech);

    return <Stack flexBasis={"80%"} spacing={1}>
        <HeaderText>Название: {tech.title}</HeaderText>
        <BodyText>Организация: {organization.name}</BodyText>
        <BodyText>Категория: {category.name}</BodyText>
        <BodyText>Статус: {status.name}</BodyText>
        <BodyText>Создано: {tech?.created_at}</BodyText>
        <BodyText>Дата конца эксплуатации: {tech?.end_time_at}</BodyText>
    </Stack>
}

const ControlPanel: FC<TechListItemProps> = ({ tech }: { tech: ITech }) => {
    const onTechRemove = () => removeTech(tech.id);

    return (
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <TechModal
                trigger={<Button variant="outlined">Редактировать</Button>}
                tech={tech}
            />

            <Modal trigger={<Button variant="outlined">Удалить</Button>}>
                <BodyText textAlign={"center"}>
                    Вы уверены, что хотите удалить запись о {tech.title} ?
                </BodyText>
                <Stack direction={"row"} justifyContent={"center"} mt={2}>
                    <Button onClick={onTechRemove}>Удалить</Button>
                    <Button>Отменить</Button>
                </Stack>
            </Modal>
        </Stack>
    );
};

export default TechListItem;
