import { firebaseStore } from "@/global/firebase"
import { TECH_COLLECTION_NAME } from "@/modules/TechControl/consts/tech"
import { collection, doc, query, QueryFieldFilterConstraint, QueryOrderByConstraint } from "firebase/firestore"

export const techCollection = collection(firebaseStore, TECH_COLLECTION_NAME)

export const getTechDocumentByPath = (path: string[]) => doc(techCollection, ...path)

export const getTechQueryByFilters = (...queryFilters: Array<QueryFieldFilterConstraint | QueryOrderByConstraint | undefined>) => {
    const existingFilters = queryFilters.filter((queryFilter): queryFilter is QueryFieldFilterConstraint => Boolean(queryFilter))

    return query(techCollection, ...existingFilters)
}