import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TechRemoveModal from "@/modules/TechControl/components/TechesView/TechRemoveModal";
import TechModal from "@/modules/TechControl/components/TechModal/TechModal";
import { Button } from "@mui/material";
import { FC, memo } from "react";
import { ITech } from "@/global/types/entity/Tech";
import { useTechData } from "@/modules/TechControl/hooks/useTechData";
import { useTechesByOrganizationAndCategory } from "@/modules/TechControl/hooks/useTeches";
import { HeaderText } from "@/ui/Text";

const TechTable = () => {
    const teches = useTechesByOrganizationAndCategory();

    return (
        <TableContainer
            component={Paper}
            sx={{
                margin: "0 auto",
                maxWidth: { lg: "100%", xs: "85dvw" },
            }}
        >
            <Table sx={{ flex: 1 }} aria-label="Таблица техники">
                <TableHeader />
                <TableBody>
                    <TechAddRow />
                    {teches.length ? (
                        teches.map((tech) => (
                            <TechTableRow key={tech.id} tech={tech} />
                        ))
                    ) : (
                        <TechTableEmpty />
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="right">Организация</TableCell>
                <TableCell align="right">Категория</TableCell>
                <TableCell align="right">Статус</TableCell>
                <TableCell align="right">Создано</TableCell>
                <TableCell align="right">Списание</TableCell>
                <TableCell align="right" />
                <TableCell align="right" />
            </TableRow>
        </TableHead>
    );
};

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

const TechTableEmpty = () => {
    return (
        <TableRow
            sx={{
                "&:last-child td, &:last-child th": {
                    border: 0,
                },
            }}
        >
            <TableCell component="th" scope="row" colSpan={10} align="center">
                <HeaderText>
                    Организационной техники по заданным фильтрам не найдено
                </HeaderText>
            </TableCell>
        </TableRow>
    );
};

const TechAddRow = () => {
    return (
        <TechModal
            container={true}
            trigger={
                <TableRow
                    sx={{
                        cursor: "pointer",
                        "&:last-child td, &:last-child th": {
                            border: 0,
                        },
                    }}
                >
                    <TableCell
                        component="th"
                        scope="row"
                        colSpan={10}
                        align="center"
                    >
                        <HeaderText fontWeight={"bold"}>
                            Добавить новую организационную технику
                        </HeaderText>
                    </TableCell>
                </TableRow>
            }
        />
    );
};

export default TechTable;
