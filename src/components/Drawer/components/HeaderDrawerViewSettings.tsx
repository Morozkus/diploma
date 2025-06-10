import { Tooltip, ToggleButtonGroup, ToggleButton } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { useContext } from "react";
import { ListViewSettingsContext } from "@/components/Drawer/context/ListViewSettingsContext";

const HeaderDrawerViewSettings = () => {
    const { activeView, setView } = useContext(ListViewSettingsContext);

    return (
        <ToggleButtonGroup
            value={activeView}
            exclusive
            onChange={(_, data) => setView?.(data)}
            sx={{ display: "contents" }}
        >
            <Tooltip title="Показать в виде списка">
                <ToggleButton value="list">
                    <ListIcon />
                </ToggleButton>
            </Tooltip>

            <Tooltip title="Показать в виде таблицы">
                <ToggleButton value="table">
                    <TableRowsIcon />
                </ToggleButton>
            </Tooltip>
        </ToggleButtonGroup>
    );
};

export default HeaderDrawerViewSettings;
