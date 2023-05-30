import { Outlet } from "react-router-dom";
import "./App.css";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/config";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState, createContext, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import ToggleTheme from "./components/common/ToggleTheme";
import Footer from "./components/common/Footer";
import FabContainer from "./components/common/FabContainer";

const baseTheme = {
  typography: {
    h3: {
      fontSize: "2.5rem",
      fontWeight: 300,
      letterSpacing: "4px",
      "@media (max-width:600px)": {
        fontSize: "2rem"
      }
    }
  }
};

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#191919"
    }
  }
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#fcfcfc"
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

  useEffect(() => {
    console.log(appState);
  }, [appState]);

  return (
    <SetThemeContext.Provider value={{ setThemeMode, themeMode }}>
      <AppStateContext.Provider value={{ appState, setAppState }}>
        <FirebaseDBContext.Provider value={db}>
          <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
            <CssBaseline />
            <div className="App">
              <ToggleTheme />
              <FabContainer />
              <Outlet />
              <Footer />
            </div>
          </ThemeProvider>
        </FirebaseDBContext.Provider>
      </AppStateContext.Provider>
    </SetThemeContext.Provider>
  );
}

export { FirebaseDBContext, AppStateContext, SetThemeContext };

export default App;
