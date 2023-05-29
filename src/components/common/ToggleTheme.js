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
    <div style={{ marginTop: "3px" }} onClick={() => setTheme()}>
      {themeMode === "dark" ? <LightModeIcon color="primary" /> : <DarkModeIcon />}
    </div>
  );
};

export default ToggleTheme;
