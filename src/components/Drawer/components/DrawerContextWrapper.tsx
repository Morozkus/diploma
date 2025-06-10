import {
    ViewSettings,
    ListViewSettingsContext,
} from "@/components/Drawer/context/ListViewSettingsContext";
import {
    SearchTechName,
    SearchTechNameContext,
} from "@/components/Drawer/context/SearchTechNameContext";
import { FC, PropsWithChildren, useState } from "react";

const DrawerContextWrapper: FC<PropsWithChildren> = ({ children }) => {
    const [activeView, setView] = useState<ViewSettings["activeView"]>("table");
    const [name, setName] = useState<SearchTechName["name"]>("");

    return (
        <SearchTechNameContext value={{ name, setName }}>
            <ListViewSettingsContext value={{ activeView, setView }}>
                {children}
            </ListViewSettingsContext>
        </SearchTechNameContext>
    );
};

export default DrawerContextWrapper;
