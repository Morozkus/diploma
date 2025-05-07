import CategoryControlModal from "@/modules/CategoryList/components/CategoryControlModal"
import { ICategory } from "@/modules/CategoryList/types"
import { FC } from "react"

interface CategoryItemProps {
    category: ICategory
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
    return <CategoryControlModal category={category} />
}
export default CategoryItem