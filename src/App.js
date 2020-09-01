import React from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ArrivalsPage from "./components/ArrivalsPage/ArrivalsPage";

function App() {
  return (
    <div className="page-wrapper">
      <WelcomePage />
      <ArrivalsPage />
    </div>
  );
}

export default App;
