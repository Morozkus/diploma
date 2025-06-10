import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTechesByOrganizationAndCategory } from "@/modules/TechControl/hooks/useTeches";
import TechAddRow from "@/modules/TechControl/components/TechesView/Table/TechAddRow";
import TechTableEmpty from "@/modules/TechControl/components/TechesView/Table/TechTableEmpty";
import TechTableRow from "@/modules/TechControl/components/TechesView/Table/TechTableRow";

const TechTable = () => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                margin: "0 auto",
                maxWidth: { lg: "100%", xs: "85dvw" },
            }}
        >
            <Table sx={{ flex: 1 }} aria-label="Таблица техники">
                <Header />
                <Body />
            </Table>
        </TableContainer>
    );
};

const Header = () => {
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

const Body = () => {
    const teches = useTechesByOrganizationAndCategory();

    return (
        <TableBody>
            <TechAddRow />
            {teches.length ? (
                teches.map((tech) => <TechTableRow key={tech.id} tech={tech} />)
            ) : (
                <TechTableEmpty />
            )}
        </TableBody>
    );
};

export default TechTable;
