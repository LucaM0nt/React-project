import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Drinks from "./pages/Drinks";
import SingleDrink from "./pages/SingleDrink";
import Search from "./pages/Search";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks API_URL={API_URL} />} />
        <Route path="/drinks/:id" element={<SingleDrink />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
