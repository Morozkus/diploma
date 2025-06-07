import { DocumentReference } from "firebase/firestore"

export interface ITech {
    id: string
    category: DocumentReference
    organization: DocumentReference
    mark: string
    status: DocumentReference
    statusHistory: DocumentReference[]
    title: string
    created_at?: string
    end_time_at?: string
}