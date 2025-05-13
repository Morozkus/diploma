interface TechFormValidateInfo {
    isValid: boolean
    errorText?: string
}

interface ValidateFields {
    title?: string
    organization?: string
    category?: string
    status?: string
}

export const validateTechFormData = (fields: ValidateFields): { isValid: boolean } & Record<keyof ValidateFields, TechFormValidateInfo> => {
    const title = titleValidate(fields.title)
    const category = categoryValidate(fields.category)
    const organization = organizationValidate(fields.organization)
    const status = statusValidate(fields.status)

    return {
        isValid: title.isValid && category.isValid && organization.isValid && status.isValid,
        title,
        category,
        organization,
        status
    }
}

const titleValidate = (title?: string): TechFormValidateInfo => {
    if (!title) return { isValid: false, errorText: "Не указано название" }
    else if (title.length < 3) return { isValid: false, errorText: "Название должно быть больше 3 символов" }

    return { isValid: true }
}

const categoryValidate = (category?: string): TechFormValidateInfo => {
    if (!category) return { isValid: false, errorText: "Не указана категория" }

    return { isValid: true }
}

const organizationValidate = (organization?: string): TechFormValidateInfo => {
    if (!organization) return { isValid: false, errorText: "Не указана организация" }

    return { isValid: true }
}

const statusValidate = (status?: string): TechFormValidateInfo => {
    if (!status) return { isValid: false, errorText: "Не указан текущий статус" }

    return { isValid: true }
}