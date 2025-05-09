import { useCategoryActions } from "@/modules/CategoryList/hooks/useCategoryActions"
import { isNotEmptyValue } from "@/modules/CategoryList/lib/utils"
import { ICategory } from "@/modules/CategoryList/types"
import { Modal } from "@/ui/Modal"
import { HeaderText } from "@/ui/Text"
import { ListItem, ListItemButton, ListItemText, Stack, TextField, Button } from "@mui/material"
import { useState, useActionState, FC } from "react"

interface CategoryItemProps {
    category: ICategory,
    isActive: boolean,
    onSelect: () => void
}

const CategoryItem: FC<CategoryItemProps> = ({ category, isActive, onSelect }) => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const { updateCategory, removeCategory } = useCategoryActions()

    const [, onSubmit] = useActionState(
        async (_: null, formData: FormData) => {
            const name = formData.get("categoryName") as string

            if (isNotEmptyValue(name))
                updateCategory(category.id, name)

            return null
        },
        null
    )

    const onRemove = async () => removeCategory(category.id)

    return <Modal
        trigger={
            <ListItem disablePadding>
                <ListItemButton selected={isActive}>
                    <ListItemText primary={category.name} />
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
                Управление категорией
            </HeaderText>
            <TextField
                defaultValue={category.name}
                name="categoryName"
                id="standard-basic"
                label="Название категории"
                variant="standard"
                fullWidth
            />
            <Stack onClick={() => setPopoverOpen(false)} flexDirection="row" sx={{ mt: 4, gap: 1 }}>
                <Button variant="contained" onClick={onSelect}>Выбрать</Button>
                <Button type="submit" variant="contained">Переименовать</Button>
                <Button variant="contained" onClick={onRemove}>Удалить</Button>
            </Stack>
        </Stack>
    </Modal>
}
export default CategoryItem
