import ChooseCity from "./ChooseCity";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-2 py-3 sm:px-5 bg-one">
      <ChooseCity />
    </header>
  );
};

export default Header;
