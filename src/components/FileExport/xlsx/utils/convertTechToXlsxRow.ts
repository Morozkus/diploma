import { ITechData } from "@/global/types/entity/Tech";

export const convertTechToXlsxRow = ({
    title,
    organization,
    category,
    status,
    created_at,
    end_time_at,
}: ITechData) => ({
    Название: title,
    Организация: organization.name,
    Категория: category.name,
    Статус: status.name,
    Добавлено: created_at ?? "Неизвестно",
    "Эксплуатируется до": end_time_at ?? "Не указано",
});
