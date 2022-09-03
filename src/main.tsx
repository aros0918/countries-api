import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkmodeContextProvider } from "./context/DarkmodeContext";
import { SearchContextProvider } from "./context/SearchContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchContextProvider>
      <DarkmodeContextProvider>
        <App />
      </DarkmodeContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);
