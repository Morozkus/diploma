import { createContext } from "react";

export interface ViewSettings {
    activeView: "list" | "table";
    setView?: (view: ViewSettings["activeView"]) => void;
}

export const ListViewSettingsContext = createContext<ViewSettings>({
    activeView: "table",
});