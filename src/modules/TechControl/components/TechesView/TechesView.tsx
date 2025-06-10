import { ListViewSettingsContext } from "@/components/Drawer";
import TechList from "@/modules/TechControl/components/TechesView/List/TechList";
import TechTable from "@/modules/TechControl/components/TechesView/Table/TechTable";
import { useContext } from "react";

const TechesView = () => {
    const { activeView } = useContext(ListViewSettingsContext);

    if (activeView === "table") return <TechTable />;

    return <TechList />;
};
export default TechesView;
