import { SearchTechNameContext } from "@/components/Drawer/context/SearchTechNameContext";
import { TextField } from "@mui/material";
import { useContext } from "react";

const HeaderDrawerSearchTechInput = () => {
    const { name, setName } = useContext(SearchTechNameContext);

    return (
        <TextField
            fullWidth
            id="outlined-basic"
            label="Поиск по названию техники"
            variant="outlined"
            value={name}
            onChange={(e) => setName?.(e.target.value)}
        />
    );
};
export default HeaderDrawerSearchTechInput;
