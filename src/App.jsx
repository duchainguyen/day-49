import React, { useEffect } from "react";
import { ThemeProvider } from "./component/ThemeContext";
import YourMainComponent from "./component/YourMain";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import Slider from "./component/Slider";
import "./App.css";
const App = () => {
  return (
    <ThemeProvider>
      <ToastContainer />
      <YourMainComponent />
      {/* <Slider /> */}
    </ThemeProvider>
  );
};

export default App;
