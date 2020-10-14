import React from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ArrivalsPage from "./components/ArrivalsPage/ArrivalsPage";
import BrandsPage from "./components/BrandsPage/BrandsPage";

function App() {
  return (
    <div className="page-wrapper">
      <WelcomePage />
      <ArrivalsPage />
      <BrandsPage />
    </div>
  );
}

export default App;
