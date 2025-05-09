import { CATEGORY_PARAM_NAME, ORGANIZATION_PARAM_NAME } from "@/global/router/consts/params"
import { useSearchParams } from "react-router-dom"

export interface SearchParams {
    organization: string
    category: string
}

export const useSearchParamsSet = <T extends keyof SearchParams>() => {
    const [, setSearchParams] = useSearchParams()

    return (key: T, value: SearchParams[T]) => setSearchParams((prevState) => {

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value ? prevState.set(key, value) : prevState.delete(key)

        return prevState
    })
}

export const useCurrentOrganizationId = () => {
    const [searchParams] = useSearchParams()

    return searchParams.get(ORGANIZATION_PARAM_NAME)
}

export const useCurrentCategoryId = () => {
    const [searchParams] = useSearchParams()

    return searchParams.get(CATEGORY_PARAM_NAME)
}