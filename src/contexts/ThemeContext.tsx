import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  theme: "dark", // valor padrão
  toggleTheme: () => { }, // função vazia padrão
});


export function ThemeProvider({ children }: {
  children: React.ReactNode
}) {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const data = useContext(ThemeContext);

  return data;
}