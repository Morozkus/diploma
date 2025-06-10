import TechModal from "@/modules/TechControl/components/TechModal/TechModal";
import { HeaderText } from "@/ui/Text";
import { TableRow, TableCell, Button } from "@mui/material";

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
                        <Button variant="contained">
                            <HeaderText fontWeight={"bold"}>
                                Добавить новую организационную технику
                            </HeaderText>
                        </Button>
                    </TableCell>
                </TableRow>
            }
        />
    );
};

export default TechAddRow;
