import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { toast } from "react-toastify";
import Slider from "./Slider";
const YourMainComponent = () => {
  const { darkMode, setDarkMode } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  useEffect(() => {
    toast.success("Chào mừng bạn đến với trò chơi tìm số");
  }, []);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Your component content */}
      <div className="container">
        {" "}
        <h1>Chào mừng bạn đến với trò chơi đếm số</h1>
        <button className="dark-light-btn" onClick={toggleDarkMode}>
          Toggle Dark Mode
          {/* <i class="fa-solid fa-sun"></i> */}
        </button>
        <Slider />
      </div>
    </div>
  );
};

export default YourMainComponent;
