import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Info from "./components/Info";

function App() {
  const [currentTheme, setCurrentTheme] = React.useState("light");

  useEffect(() => {
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentTheme]);

  function handleDarkMode() {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }

  return (
    <div className={`${currentTheme === "dark" ? "dark" : "light"}`}>
      <Header handleDarkMode={handleDarkMode} mode={currentTheme} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:country" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
