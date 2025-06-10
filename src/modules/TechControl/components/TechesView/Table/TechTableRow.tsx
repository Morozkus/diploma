import { ITech } from "@/global/types/entity/Tech";
import TechRemoveModal from "@/modules/TechControl/components/TechesView/TechRemoveModal";
import TechModal from "@/modules/TechControl/components/TechModal/TechModal";
import { useTechData } from "@/modules/TechControl/hooks/useTechData";
import { TableRow, TableCell, Button } from "@mui/material";
import { FC, memo } from "react";

interface TechTableRowProps {
    tech: ITech;
}

const TechTableRow: FC<TechTableRowProps> = memo(({ tech }) => {
    const { category, organization, status } = useTechData(tech);

    return (
        <TableRow
            sx={{
                "&:last-child td, &:last-child th": {
                    border: 0,
                },
            }}
        >
            <TableCell component="th" scope="row">
                {tech.title}
            </TableCell>
            <TableCell align="right">{organization.name}</TableCell>
            <TableCell align="right">{category.name}</TableCell>
            <TableCell align="right">{status.name}</TableCell>
            <TableCell align="right">{tech.created_at}</TableCell>
            <TableCell align="right">{tech.end_time_at}</TableCell>
            <TableCell align="right">
                <TechModal
                    trigger={<ModalButton text="Редактировать" />}
                    tech={tech}
                />
            </TableCell>
            <TableCell align="right">
                <TechRemoveModal
                    trigger={<ModalButton text="Удалить" />}
                    tech={tech}
                />
            </TableCell>
        </TableRow>
    );
});

const ModalButton = ({ text }: { text: string }) => {
    return <Button variant="outlined">{text}</Button>;
};

export default TechTableRow;
