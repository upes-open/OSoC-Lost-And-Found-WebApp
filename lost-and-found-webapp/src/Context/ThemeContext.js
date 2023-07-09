import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useState, useMemo } from "react";


export const ThemeContext = createContext({
    toggleMode: () => { },
    mode: "light"
})

export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    const colorMode = useMemo(() => ({
        toggleMode: () =>
            setMode(prevMode => (prevMode === "light" ? "dark" : "light")),
        mode
    }), [mode]);

    const theme = createTheme({
        palette: {
            mode: mode
        }
    })

    return (
        <ThemeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}