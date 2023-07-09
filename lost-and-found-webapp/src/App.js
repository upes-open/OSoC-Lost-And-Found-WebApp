import React, { useContext } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import FeedbackForm from "./feedback/FeedbackForm";
import { ThemeContext } from "./Context/ThemeContext";


const App = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <div>
      <NavBar mode={mode} toggleMode={toggleMode} />
      {/* <FeedbackForm /> */}
    </div>
  )
};



export default App;
