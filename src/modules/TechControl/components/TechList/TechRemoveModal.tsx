import { ITech } from "@/global/types/entity/Tech";
import { removeTech } from "@/modules/TechControl/api/firestore/techActions";
import { BodyText } from "@/ui/Text";
import { Stack, Button } from "@mui/material";
import { Modal } from "@/ui/Modal";
import { FC, ReactNode } from "react";

interface TechRemoveModalProps {
    tech: ITech;
    trigger: ReactNode;
}

const TechRemoveModal: FC<TechRemoveModalProps> = ({ tech, trigger }) => {
    const onTechRemove = () => removeTech(tech.id);

    return (
        <Modal trigger={trigger}>
            <BodyText textAlign={"center"}>
                Вы уверены, что хотите удалить запись о {tech.title} ?
            </BodyText>
            <Stack direction={"row"} justifyContent={"center"} mt={2}>
                <Button onClick={onTechRemove}>Удалить</Button>
                <Button>Отменить</Button>
            </Stack>
        </Modal>
    );
};
export default TechRemoveModal;
