import { useContext } from "react";
import { SetThemeContext } from "../../App";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ToggleTheme = () => {
  const { setThemeMode, themeMode } = useContext(SetThemeContext);
  const setTheme = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
    localStorage.setItem("theme", themeMode === "dark" ? "light" : "dark");
  };
  return (
    <div style={{ position: "fixed", top: 32, right: 32, zIndex: 100 }} onClick={() => setTheme()}>
      {themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </div>
  );
};

export default ToggleTheme;
