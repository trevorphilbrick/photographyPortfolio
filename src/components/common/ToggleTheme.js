import { useContext } from "react";
import { SetThemeContext } from "../../App";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ToggleTheme = () => {
  const { setThemeMode, themeMode } = useContext(SetThemeContext);
  return (
    <div
      style={{ position: "fixed", top: "32px", right: "32px", zIndex: 100 }}
      onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
    >
      {themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon color="#fff" />}
    </div>
  );
};

export default ToggleTheme;
