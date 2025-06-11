import { useExportAsXlsx } from "@/components/FileExport/xlsx/hooks/useExportAsXlsx";
import { useTechesData } from "@/modules/TechControl/hooks/useTechData";
import { useTechesByOrganizationAndCategory } from "@/modules/TechControl/hooks/useTeches";
import { ButtonText } from "@/ui/Text";
import { Button } from "@mui/material";
import { memo } from "react";

const TechTableDownload = memo(() => {
    const [teches] = useTechesByOrganizationAndCategory();
    const mappedTeches = useTechesData(teches);
    const download = useExportAsXlsx(mappedTeches);

    return (
        <Button variant="contained" sx={{ margin: 2 }} onClick={download}>
            <ButtonText fontWeight={"bold"}>Скачать как .xlsx файл</ButtonText>
        </Button>
    );
});
export default TechTableDownload;
