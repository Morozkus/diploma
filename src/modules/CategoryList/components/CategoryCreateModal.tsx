import AddIcon from '@mui/icons-material/Add';
import { ListButton } from '@/components/HeaderList';
import { Modal } from "@/ui/Modal";
import { HeaderText } from "@/ui/Text";
import { Stack, TextField, Button } from "@mui/material";
import { useState, useActionState } from "react";
import { useCategoryActions } from "@/modules/CategoryList/hooks/useCategoryActions";
import { isNotEmptyValue } from '@/modules/CategoryList/lib/utils';

const CategoryCreateModal = () => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const { addCategory } = useCategoryActions()

    const [, onSubmit] = useActionState(
        async (_: null, formData: FormData) => {
            const name = formData.get("techName") as string

            if (isNotEmptyValue(name))
                addCategory(name).finally(() => setPopoverOpen(false))

            return null
        },
        null
    )

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
                name="techName"
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