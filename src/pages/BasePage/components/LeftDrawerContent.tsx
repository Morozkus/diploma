import { CategoryList } from "@/modules/CategoryList";
import StatusList from "@/modules/Status/components/StatusList";
import { Divider } from "@mui/material";

const LeftDrawerContent = () => {
    return (
        <>
            <StatusList />
            <Divider />
            <CategoryList />
        </>
    );
};
export default LeftDrawerContent;
