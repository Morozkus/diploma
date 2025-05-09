import List from '@mui/material/List';
import CategoryCreateModal from "@/modules/CategoryList/components/CategoryCreateModal";
import { useCategoryData } from "@/modules/CategoryList/hooks/useCategoryData";
import CategoryItem from "@/modules/CategoryList/components/CategoryItem";
import { useCurrentCategoryId, useSearchParamsSet } from '@/global/router';
import BlockSkeleton from '@/ui/Skeleton/BlockSkeleton';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

const CategoryList = () => {
    const { data: categories, isLoading } = useCategoryData()
    const activeCategory = useCurrentCategoryId()
    const setActiveCategory = useSearchParamsSet()

    if (isLoading) {
        return <BlockSkeleton />
    }

    return <List>
        <CategoryCreateModal />

        <ListItem disablePadding>
            <ListItemButton onClick={() => setActiveCategory("category", "")} selected={!activeCategory}>
                <ListItemText primary={"Все категории"} />
            </ListItemButton>
        </ListItem>

        {
            categories.map((category) => <CategoryItem
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onSelect={() => setActiveCategory("category", category.id)}
            />
            )
        }
    </List>
}

export default CategoryList