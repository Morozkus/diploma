import { convertTechToXlsxRow } from "@/components/FileExport/xlsx/utils/convertTechToXlsxRow";
import { ITechData } from "@/global/types/entity/Tech";
import { useCallback } from "react";
import { utils, writeFile } from "xlsx";

export const useExportAsXlsx = (teches: ITechData[]) => {
    const downloadXlsxTeches = useCallback(() => {
        const techBook = utils.book_new();
        const techSheet = utils.json_to_sheet(teches.map(convertTechToXlsxRow));

        utils.book_append_sheet(techBook, techSheet, "Организационная техника");

        writeFile(techBook, "Организационная техника.xlsx");
    }, [teches]);

    return downloadXlsxTeches;
};
