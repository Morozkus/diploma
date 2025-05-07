import { firebaseStore } from "@/global/firebase";
import { ORGANIZATION_COLLECTION_NAME } from "@/modules/OrganizationList/consts/collection";
import { collection, doc } from "firebase/firestore";

export const organizationCollection = collection(firebaseStore, ORGANIZATION_COLLECTION_NAME)

export const getOrganizationDocumentByPath = (path: string[]) => doc(organizationCollection, ...path)