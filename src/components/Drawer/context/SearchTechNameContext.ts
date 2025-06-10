import { createContext } from "react";

export interface SearchTechName {
    name: string;
    setName?: (view: SearchTechName["name"]) => void;
}

export const SearchTechNameContext = createContext<SearchTechName>({
    name: "",
});