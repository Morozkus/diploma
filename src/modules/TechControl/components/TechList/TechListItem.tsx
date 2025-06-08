import TechModal from "@/modules/TechControl/components/TechModal/TechModal";
import { ITech } from "@/global/types/entity/Tech";
import { BodyText, HeaderText } from "@/ui/Text";
import { Button, Stack } from "@mui/material";
import { FC, memo } from "react";
import { useTechData } from "@/modules/TechControl/hooks/useTechData";
import TechRemoveModal from "@/modules/TechControl/components/TechList/TechRemoveModal";

interface TechListItemProps {
    tech: ITech;
}

const TechListItem: FC<TechListItemProps> = memo(({ tech }) => {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
            border={"1px solid black"}
            padding={2}
            rowGap={2}
        >
            <TechInfo tech={tech} />
            <ControlPanel tech={tech} />
        </Stack>
    );
});

const TechInfo: FC<TechListItemProps> = ({ tech }) => {
    const { category, organization, status } = useTechData(tech);

    return (
        <Stack flex={1} spacing={1}>
            <HeaderText>Название: {tech.title}</HeaderText>
            <BodyText>Организация: {organization.name}</BodyText>
            <BodyText>Категория: {category.name}</BodyText>
            <BodyText>Статус: {status.name}</BodyText>
            <BodyText>Создано: {tech?.created_at}</BodyText>
            <BodyText>Дата конца эксплуатации: {tech?.end_time_at}</BodyText>
        </Stack>
    );
};

const ControlPanel: FC<TechListItemProps> = ({ tech }: { tech: ITech }) => {
    return (
        <Stack
            flexBasis={"35%"}
            direction={"row"}
            alignItems={"center"}
            flexWrap={"wrap"}
            justifyContent={"flex-end"}
            spacing={2}
            rowGap={1}
        >
            <TechModal
                trigger={<ModalButton text="Редактировать" />}
                tech={tech}
            />

            <TechRemoveModal
                trigger={<ModalButton text="Удалить" />}
                tech={tech}
            />
        </Stack>
    );
};

const ModalButton = ({ text }: { text: string }) => {
    return <Button variant="outlined">{text}</Button>;
};

export default TechListItem;
