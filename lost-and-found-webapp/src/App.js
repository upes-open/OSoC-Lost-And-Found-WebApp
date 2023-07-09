import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./NavBar";



const App = () => {
  const theme = createTheme({
    type: "dark"
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
      </div>
    </ThemeProvider>
  )
};



export default App;
