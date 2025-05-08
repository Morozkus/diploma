import List from '@mui/material/List';
import CategoryCreateModal from "@/modules/CategoryList/components/CategoryCreateModal";
import { useCategoryData } from "@/modules/CategoryList/hooks/useCategoryData";
import CategoryItem from "@/modules/CategoryList/components/CategoryItem";
import { useCurrentCategoryId, useSearchParamsSet } from '@/global/router';

const CategoryList = () => {
    const categories = useCategoryData()
    const activeCategory = useCurrentCategoryId()
    const setActiveCategory = useSearchParamsSet()

    return <List>
        {
            categories.map((category) => <CategoryItem 
            key={category.id} 
            category={category} 
            isActive={activeCategory === category.id}
            onSelect={() => setActiveCategory("category", category.id)}
            />
        )
        }

        <CategoryCreateModal />
    </List>
}

export default CategoryList