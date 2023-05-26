import { Outlet } from "react-router-dom";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase/config";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState, createContext, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import ToggleTheme from "./components/common/ToggleTheme";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FirebaseDBContext = createContext();
const AppStateContext = createContext();
const SetThemeContext = createContext();

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const [appState, setAppState] = useState({});

  return (
    <SetThemeContext.Provider value={{ setThemeMode, themeMode }}>
      <AppStateContext.Provider value={{ appState, setAppState }}>
        <FirebaseDBContext.Provider value={db}>
          <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
            <CssBaseline />
            <div className="App">
              <ToggleTheme />
              <Outlet />
            </div>
          </ThemeProvider>
        </FirebaseDBContext.Provider>
      </AppStateContext.Provider>
    </SetThemeContext.Provider>
  );
}

export { FirebaseDBContext, AppStateContext, SetThemeContext };

export default App;
