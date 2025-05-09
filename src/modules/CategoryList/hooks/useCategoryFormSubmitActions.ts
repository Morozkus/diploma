import { addCategory, updateCategory } from "@/modules/CategoryList/api/firestore/categoryActions"
import { isNotEmptyValue } from "@/modules/CategoryList/lib/utils"
import { ICategory } from "@/modules/CategoryList/types"
import { useActionState } from "react"

const CATEGORY_FORM_ADD_ACTION_FIELDS = {
    categoryNameInput: "addCategoryName"
}

export const useCategoryFormAddAction = (onAddCategory: (name: string) => void) => {
    const [, onSubmit] = useActionState(
        async (_: null, formData: FormData) => {
            const name = formData.get(CATEGORY_FORM_ADD_ACTION_FIELDS.categoryNameInput) as string

            if (isNotEmptyValue(name)) {
                addCategory(name)
                onAddCategory(name)
            }
            return null
        },
        null
    )

    return {
        fieldNames: CATEGORY_FORM_ADD_ACTION_FIELDS,
        onSubmit
    }
}

const CATEGORY_FORM_UPDATE_ACTION_FIELDS = {
    categoryNameInput: "updateCategoryName"
}

export const useCategoryFormUpdateAction = (category: ICategory) => {
    const [, onSubmit] = useActionState(
        async (_: null, formData: FormData) => {
            const name = formData.get(CATEGORY_FORM_UPDATE_ACTION_FIELDS.categoryNameInput) as string

            if (isNotEmptyValue(name))
                updateCategory(category.id, name)

            return null
        },
        null
    )

    return {
        fieldNames: CATEGORY_FORM_UPDATE_ACTION_FIELDS,
        onSubmit
    }
}