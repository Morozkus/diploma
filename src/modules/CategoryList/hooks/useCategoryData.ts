import validateCategory from "@/modules/CategoryList/api/schema/CategorySchema"
import { categoryCollection } from "@/modules/CategoryList/store/collection"
import { ICategory } from "@/modules/CategoryList/types"
import { useCollectionData } from "react-firebase-hooks/firestore"

export const useCategoryData = (): { data: ICategory[], isLoading: boolean } => {
    const [categories, isLoading] = useCollectionData(categoryCollection)

    if (!categories) return { data: [], isLoading }

    return { data: categories.filter((data) => validateCategory(data)), isLoading }
}