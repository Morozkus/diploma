import { HeaderText } from "@/ui/Text";
import { TableRow, TableCell } from "@mui/material";

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

export default TechTableEmpty;
