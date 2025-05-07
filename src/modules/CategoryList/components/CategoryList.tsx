import List from '@mui/material/List';
import CategoryCreateModal from "@/modules/CategoryList/components/CategoryCreateModal";
import { useCategoryData } from "@/modules/CategoryList/hooks/useCategoryData";
import CategoryItem from "@/modules/CategoryList/components/CategoryItem";

const CategoryList = () => {
    const categories = useCategoryData()

    return <List>
        {
            categories.map((category) => <CategoryItem key={category.id} category={category} />)
        }

        <CategoryCreateModal />
    </List>
}

export default CategoryList