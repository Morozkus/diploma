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
import { memo } from "react";

const TechTable = () => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                margin: "0 auto",
                flex: 1,
                width: "100%",
                maxWidth: { lg: "100%", xs: "85dvw" },
                overflowX: "auto",
            }}
        >
            <TechAddRow />

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
                <TableCell sx={{ minWidth: "200px", maxWidth: "300px" }}>
                    Название
                </TableCell>
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

const Body = memo(() => {
    const teches = useTechesByOrganizationAndCategory();

    return (
        <TableBody>
            {teches.length ? (
                teches.map((tech) => <TechTableRow key={tech.id} tech={tech} />)
            ) : (
                <TechTableEmpty />
            )}
        </TableBody>
    );
});

export default TechTable;
