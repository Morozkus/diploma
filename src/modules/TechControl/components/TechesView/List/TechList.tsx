import TechModal from "@/modules/TechControl/components/TechModal/TechModal";
import TechListEmpty from "@/modules/TechControl/components/TechesView/List/TechListEmpty";
import TechListItem from "@/modules/TechControl/components/TechesView/List/TechListItem";
import { useTechesByOrganizationAndCategory } from "@/modules/TechControl/hooks/useTeches";
import { Button, Stack } from "@mui/material";
import { HeaderText } from "@/ui/Text";

const TechList = () => {
    const teches = useTechesByOrganizationAndCategory();

    return (
        <Stack spacing={2}>
            <TechModal trigger={<TechAddTrigger />} />
            {teches.length ? (
                teches.map((tech) => <TechListItem key={tech.id} tech={tech} />)
            ) : (
                <TechListEmpty />
            )}
        </Stack>
    );
};

const TechAddTrigger = () => {
    return (
        <Button
            sx={{
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
            }}
            variant="outlined"
        >
            <HeaderText fontWeight={"bold"}>Добавить технику</HeaderText>
        </Button>
    );
};

export default TechList;
