import TechModal from "@/modules/TechControl/components/TechModal/TechModal"
import TechListEmpty from "@/modules/TechControl/components/TechList/TechListEmpty"
import TechListItem from "@/modules/TechControl/components/TechList/TechListItem"
import { useTechesByOrganizationAndCategory } from "@/modules/TechControl/hooks/useTeches"
import { Stack } from "@mui/material"
import TechAddTrigger from "@/modules/TechControl/components/TechModal/TechAddTrigger"

const TechList = () => {
    const teches = useTechesByOrganizationAndCategory()

    return <Stack spacing={2}>
        <TechModal trigger={<TechAddTrigger />} />
        {
            teches.length
                ? teches.map((tech) => <TechListItem key={tech.id} tech={tech} />)
                : <TechListEmpty />
        }
    </Stack>
}

export default TechList