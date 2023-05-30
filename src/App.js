import { Outlet } from "react-router-dom";
import "./App.css";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/config";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState, createContext } from "react";
import { getFirestore } from "firebase/firestore";
import ContactFab from "./components/common/ContactFab";
import ToggleTheme from "./components/common/ToggleTheme";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#222222"
    }
  }
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#efefef"
    }
  }
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FirebaseDBContext = createContext();
const AppStateContext = createContext();
const SetThemeContext = createContext();

function App() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") || "light");
  const [appState, setAppState] = useState({});

  return (
    <SetThemeContext.Provider value={{ setThemeMode, themeMode }}>
      <AppStateContext.Provider value={{ appState, setAppState }}>
        <FirebaseDBContext.Provider value={db}>
          <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
            <CssBaseline />
            <div className="App">
              <ToggleTheme />
              <ContactFab />
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
