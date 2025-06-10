import {
    ViewSettings,
    ListViewSettingsContext,
} from "@/components/Drawer/context/ListViewSettingsContext";
import { FC, PropsWithChildren, useState } from "react";

const ListViewSettingsWrapper: FC<PropsWithChildren> = ({ children }) => {
    const [activeView, setView] = useState<ViewSettings["activeView"]>("list");

    return (
        <ListViewSettingsContext value={{ activeView, setView }}>
            {children}
        </ListViewSettingsContext>
    );
};

export default ListViewSettingsWrapper;
