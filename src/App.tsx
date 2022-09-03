import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/";
import CountryDetails from "./components/CountryList/CountryDetails/CountryDetails";
import { useDarkmodeContext } from "./context/DarkmodeContext";
import "./index.css";
import Home from "./pages/Home/Home";

const App = () => {
  const { darkmode } = useDarkmodeContext();

  return (
    <div className={darkmode ? "app dark" : "app"}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/details/:name" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
