import TechModal from "@/modules/TechControl/components/TechModal/TechModal";
import TechListEmpty from "@/modules/TechControl/components/TechesView/List/TechListEmpty";
import TechListItem from "@/modules/TechControl/components/TechesView/List/TechListItem";
import { useTechesByOrganizationAndCategory } from "@/modules/TechControl/hooks/useTeches";
import { Button, Skeleton, Stack } from "@mui/material";
import { HeaderText } from "@/ui/Text";

const TechList = () => {
    const [teches, loading] = useTechesByOrganizationAndCategory();

    if (loading) return <ListLoading />;

    return (
        <Stack flex={1} spacing={2}>
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

const ListLoading = () => {
    return (
        <Stack flex={1} spacing={2}>
            <Skeleton variant="rounded" height={200} />
            <Skeleton variant="rounded" height={200} />
            <Skeleton variant="rounded" height={200} />
        </Stack>
    );
};

export default TechList;
