import validateCategory from "@/modules/CategoryList/api/schema/CategorySchema"
import { categoryCollection } from "@/modules/CategoryList/store/collection"
import { ICategory } from "@/modules/CategoryList/types"
import { useCollectionData } from "react-firebase-hooks/firestore"

export const useCategoryData = (): ICategory[] => {
    const [categories] = useCollectionData(categoryCollection)

    if (!categories) return []

    return categories.filter((data) => validateCategory(data))
}