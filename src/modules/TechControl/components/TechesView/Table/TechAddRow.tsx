import TechModal from "@/modules/TechControl/components/TechModal/TechModal";
import { ButtonText } from "@/ui/Text";
import { Button } from "@mui/material";

const TechAddRow = () => {
    return (
        <TechModal
            container={true}
            trigger={
                <Button variant="contained" sx={{ margin: 2 }}>
                    <ButtonText fontWeight={"bold"}>
                        Добавить новую организационную технику
                    </ButtonText>
                </Button>
            }
        />
    );
};

export default TechAddRow;
