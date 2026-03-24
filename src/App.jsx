import './App.css';
import Homepage from './Homepage.jsx';
import { useState, useEffect } from "react";

function App() {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Homepage theme={theme} setTheme={setTheme} />
  );
}

export default App;