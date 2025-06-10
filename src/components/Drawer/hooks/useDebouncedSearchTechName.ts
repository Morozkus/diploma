import { SearchTechNameContext } from "@/components/Drawer/context/SearchTechNameContext"
import { useContext, useEffect, useState } from "react"

export const useDebouncedSearchTechName = () => {
    const {name} = useContext(SearchTechNameContext) 
    const [debouncedValue, setDebouncedValue] = useState(name);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(name);
    }, 400);

    return () => clearTimeout(timer);
  }, [name]);

  return debouncedValue;
}