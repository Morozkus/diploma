import {
    useCurrentCategoryId,
    useCurrentOrganizationId,
} from "@/global/router";
import { useCategoryData } from "@/modules/CategoryList/hooks/useCategoryData";
import { getCategoryDocumentByPath } from "@/modules/CategoryList/store/collection";
import { useOrganizationsData } from "@/modules/OrganizationList/hooks/useOrganizationsData";
import { getOrganizationDocumentByPath } from "@/modules/OrganizationList/store/collection";
import { getStatusDocumentByPath } from "@/modules/Status/api/firestore/collection";
import { useStatuses } from "@/modules/Status/hooks/useStatusData";
import { setTech } from "@/modules/TechControl/api/firestore/techActions";
import { validateTechFormData } from "@/modules/TechControl/lib/validateTechFormData";
import { ITech } from "@/global/types/entity/Tech";
import { Modal } from "@/ui/Modal";
import { HeaderText } from "@/ui/Text";
import {
    Stack,
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { FC, ReactNode, useState } from "react";

interface TechModalProps {
    trigger: ReactNode;
    container?: boolean;
    tech?: ITech;
}

const TechModal: FC<TechModalProps> = ({
    trigger,
    container = false,
    tech,
}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Modal
            trigger={trigger}
            container={container}
            closeOnInnerClick={false}
            onChangeOpened={setOpen}
            opened={isOpen}
        >
            <TechModalContent
                closeParentModal={() => setOpen(false)}
                tech={tech}
            />
        </Modal>
    );
};

interface TechModalContentProps {
    tech?: ITech;
    closeParentModal: () => void;
}

const TechModalContent: FC<TechModalContentProps> = ({
    tech,
    closeParentModal,
}) => {
    const { data: organizations } = useOrganizationsData();
    const { data: categories } = useCategoryData();
    const { data: statuses } = useStatuses();

    const currentOrgainzationId = useCurrentOrganizationId();
    const currentCategoryId = useCurrentCategoryId();

    const [techName, setTechName] = useState(tech?.title ?? "");
    const [selectOrganization, setSelectOrganization] = useState(
        tech?.organization.id ?? currentOrgainzationId ?? undefined
    );
    const [selectCategory, setSelectCategory] = useState(
        tech?.category.id ?? currentCategoryId ?? undefined
    );
    const [selectStatus, setSelectStatus] = useState<string | undefined>(
        tech?.status.id ?? undefined
    );
    const [mark, setMark] = useState(tech?.mark ?? "");
    const [date, setDate] = useState(tech?.end_time_at ?? "");

    const validatedFormData = validateTechFormData({
        title: techName,
        category: selectCategory,
        organization: selectOrganization,
        status: selectStatus,
    });

    const onAddTech = () => {
        setTech({
            id: tech?.id,
            title: techName,
            mark,
            category: getCategoryDocumentByPath([selectCategory as string]),
            organization: getOrganizationDocumentByPath([
                selectOrganization as string,
            ]),
            status: getStatusDocumentByPath([selectStatus as string]),
            statusHistory: [],
            end_time_at: date,
        });
        closeParentModal();
    };

    return (
        <Stack spacing={1.5}>
            <HeaderText fontSize={24}>Добавление техники</HeaderText>
            <TextField
                label="Название техники"
                variant="standard"
                fullWidth
                value={techName}
                onChange={(event) => setTechName(event.target.value)}
            />
            <FormControl fullWidth>
                <InputLabel id="org-label">Организация</InputLabel>
                <Select
                    value={selectOrganization}
                    onChange={(event) =>
                        setSelectOrganization(event.target.value)
                    }
                    defaultValue={currentOrgainzationId ?? undefined}
                    labelId="org-label"
                    label="Организация"
                    fullWidth
                >
                    {organizations.map(({ id, name }) => (
                        <MenuItem key={id} value={id}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="cat-label">Категория</InputLabel>
                <Select
                    value={selectCategory}
                    onChange={(event) => setSelectCategory(event.target.value)}
                    labelId="cat-label"
                    label="Категория"
                    fullWidth
                    defaultValue={currentCategoryId ?? undefined}
                >
                    {categories.map(({ id, name }) => (
                        <MenuItem key={id} value={id}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="status-label">Статус</InputLabel>
                <Select
                    value={selectStatus}
                    onChange={(event) => setSelectStatus(event.target.value)}
                    labelId="status-label"
                    label="Статус"
                    fullWidth
                >
                    {statuses.map(({ id, name }) => (
                        <MenuItem key={id} value={id}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <input
                type="date"
                defaultValue={date}
                onChange={(event) =>
                    setDate(new Date(event.target.value).toLocaleDateString())
                }
            />

            <TextField
                value={mark}
                onChange={(event) => setMark(event.target.value)}
                label="Пометки"
                multiline
                rows={5}
                variant="standard"
                fullWidth
            />
            <Button
                onClick={onAddTech}
                type="submit"
                variant="contained"
                sx={{ mt: 4 }}
                disabled={!validatedFormData.isValid}
            >
                {tech ? <>Редактировать</> : <>Создать</>}
            </Button>
        </Stack>
    );
};

export default TechModal;
