import { ICategory } from "@/global/types/entity/Category"
import { removeCategory } from "@/modules/CategoryList/api/firestore/categoryActions"
import { useCategoryFormUpdateAction } from "@/modules/CategoryList/hooks/useCategoryFormSubmitActions"
import { Modal } from "@/ui/Modal"
import { HeaderText } from "@/ui/Text"
import { ListItem, ListItemButton, ListItemText, Stack, TextField, Button } from "@mui/material"
import { useState, FC } from "react"

interface CategoryItemProps {
    category: ICategory,
    isActive: boolean,
    onSelect: () => void
}

const CategoryItem: FC<CategoryItemProps> = ({ category, isActive, onSelect }) => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const { fieldNames, onSubmit } = useCategoryFormUpdateAction(category)

    const onRemove = () => removeCategory(category.id)

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
                name={fieldNames.categoryNameInput}
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
