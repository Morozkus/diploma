import { HeaderText } from "@/ui/Text"
import { Stack } from "@mui/material"

const TechListEmpty = () => {
  return <Stack marginTop={20} justifyContent={"center"} alignItems={"center"}>
    <HeaderText color="info">
        На данный момент здесь нет учтенной техники
    </HeaderText>
  </Stack>
}
export default TechListEmpty