import { DrawerContextWrapper } from "@/components/Drawer";
import BasePageView from "@/pages/BasePage/components/BasePageView";

const BasePage = () => {
    return (
        <DrawerContextWrapper>
            <BasePageView />
        </DrawerContextWrapper>
    );
};

export default BasePage;
