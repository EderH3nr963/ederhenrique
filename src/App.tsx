import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import HomePage from "./pages/Home";

function ActiveTheme() {
  const { theme } = useTheme();

  return (
    <div
      data-theme={theme === "light" ? "" : "dark"}
      className="min-h-screen dark:bg-gray-900"
    >
      <HomePage/>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ActiveTheme />
    </ThemeProvider>
  );
}

export default App;
