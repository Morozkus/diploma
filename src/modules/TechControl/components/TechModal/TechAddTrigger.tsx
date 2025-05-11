import { HeaderText } from "@/ui/Text"
import { Stack } from "@mui/material"

const TechAddTrigger = () => {
    return <Stack
        sx={{
            border: "1px black dashed",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,

            cursor: "pointer",
        }}
    >
        <HeaderText>Добавить технику</HeaderText>
    </Stack>
}
export default TechAddTrigger