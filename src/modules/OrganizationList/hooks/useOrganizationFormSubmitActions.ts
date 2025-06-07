import { addOrganization, updateOrganization } from "@/modules/OrganizationList/api/firestore/organizationActions"
import { isNotEmptyValue } from "@/modules/OrganizationList/lib/utils"
import { IOrganization } from "@/global/types/entity/Organization";
import { useActionState } from "react"

const ORGANIZATION_FORM_ADD_ACTION_FIELDS = {
    organizationNameInput: "addOrganizationName"
}

export const useOrganizationFormAddAction = (onAddOrganization: (name: string) => void) => {
    const [, onSubmit] = useActionState(
        async (_: null, formData: FormData) => {
            const name = formData.get(ORGANIZATION_FORM_ADD_ACTION_FIELDS.organizationNameInput) as string

            if (isNotEmptyValue(name)) {
                addOrganization(name)
                onAddOrganization(name)
            }
            return null
        },
        null
    )

    return {
        fieldNames: ORGANIZATION_FORM_ADD_ACTION_FIELDS,
        onSubmit
    }
}

const ORGANIZATION_FORM_UPDATE_ACTION_FIELDS = {
    organizationNameInput: "updateOrganizationName"
}

export const useOrganizationFormUpdateAction = (organization: IOrganization) => {
    const [, onSubmit] = useActionState(
        async (_: null, formData: FormData) => {
            const name = formData.get(ORGANIZATION_FORM_UPDATE_ACTION_FIELDS.organizationNameInput) as string

            if (isNotEmptyValue(name))
                updateOrganization(organization.id, name)

            return null
        },
        null
    )

    return {
        fieldNames: ORGANIZATION_FORM_UPDATE_ACTION_FIELDS,
        onSubmit
    }
}