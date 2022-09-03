import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const DarkmodeContext = createContext<any>("");

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const DarkmodeContextProvider: React.FC<Props> = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("darkmode") as any);
    if (data) setDarkmode(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  }, [darkmode]);

  const value = {
    darkmode,
    setDarkmode,
  };

  return (
    <DarkmodeContext.Provider value={value}>
      {children}
    </DarkmodeContext.Provider>
  );
};

export const useDarkmodeContext = () => {
  return useContext(DarkmodeContext);
};
