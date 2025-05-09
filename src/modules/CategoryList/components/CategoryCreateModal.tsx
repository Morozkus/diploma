import AddIcon from '@mui/icons-material/Add';
import { ListButton } from '@/components/HeaderList';
import { Modal } from "@/ui/Modal";
import { HeaderText } from "@/ui/Text";
import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useCategoryFormAddAction } from "@/modules/CategoryList/hooks/useCategoryFormSubmitActions";

const CategoryCreateModal = () => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const { fieldNames, onSubmit } = useCategoryFormAddAction(() => setPopoverOpen(false))

    return <Modal
        trigger={<ListButton text='Добавить категорию' icon={<AddIcon />} />}
        closeOnInnerClick={false}
        opened={popoverOpen}
        onChangeOpened={setPopoverOpen}
    >
        <Stack component={"form"} action={onSubmit} sx={{ gap: 1 }}>
            <HeaderText fontSize={24}>
                Создание категории техники
            </HeaderText>
            <TextField
                name={fieldNames.categoryNameInput}
                id="standard-basic"
                label="Название категории"
                variant="standard"
                fullWidth
            />
            <Button type="submit" variant="contained" sx={{ mt: 4 }}>Создать</Button>
        </Stack>
    </Modal>
}
export default CategoryCreateModal