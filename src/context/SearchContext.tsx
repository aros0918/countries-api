import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import useAxiosFetch from "../hooks/useAxiosFetch";

const SearchContext = createContext<any>("");

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searchCountries, setSearchCountries] = useState<string[]>([]);
  const [searchRegion, setSearchRegion] = useState("");
  const [regions, setRegions] = useState<string[]>([]);

  const { data: filterCountries } = useAxiosFetch(
    `https://restcountries.com/v2/name/${search}`
  );

  useEffect(() => {
    setSearchCountries(filterCountries);
  }, [filterCountries]);

  const { data: filterRegions } = useAxiosFetch(
    `https://restcountries.com/v2/region/${searchRegion}`
  );

  useEffect(() => {
    setRegions(filterRegions);
  }, [filterRegions]);

  const value = {
    search,
    setSearch,
    searchCountries,
    searchRegion,
    setSearchRegion,
    regions,
  };

  console.log("CONTEXT RENDER");

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
