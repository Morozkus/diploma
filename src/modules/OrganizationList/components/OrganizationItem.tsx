import OrganizationControlModal from "@/modules/OrganizationList/components/OrganizationControlModal"
import { IOrganization } from "@/modules/OrganizationList/types"
import { FC } from "react"

interface OrganizationItemProps {
	organization: IOrganization
}

const OrganizationItem: FC<OrganizationItemProps> = ({ organization }) => {
	return <OrganizationControlModal organization={organization} />
}
export default OrganizationItem