import { SEARCH_PARAMS } from "@/global/router/consts/params"
import { useSearchParams } from "react-router-dom"

export interface SearchParams {
    organization: string
    category: string
    status: string
}

export const useSetSearchParams = <T extends keyof SearchParams>() => {
    const [, setSearchParams] = useSearchParams()

    return (key: T, value: SearchParams[T]) => setSearchParams((prevState) => {

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value ? prevState.set(key, value) : prevState.delete(key)

        return prevState
    })
}

export const useCurrentOrganizationId = () => {
    const [searchParams] = useSearchParams()

    return searchParams.get(SEARCH_PARAMS.ORGANIZATION)
}

export const useCurrentCategoryId = () => {
    const [searchParams] = useSearchParams()

    return searchParams.get(SEARCH_PARAMS.CATEGORY)
}

export const useCurrentStatusId = () => {
    const [searchParams] = useSearchParams()

    return searchParams.get(SEARCH_PARAMS.STATUS)
}