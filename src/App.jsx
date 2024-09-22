import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import DarkMode from "./components/DarkMode";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AppContext } from "./UseContext/appContext";
import SocialMedia from "./components/SocialMedia";

function App() {
  const [isTheme, setTheme] = useState(true); // true == dark
  const [isMenu, setMenu] = useState(false); //phone menu btn click check

  const code =
    "const [isTheme, setTheme] = useState(true); const [isTheme, setTheme] = useState(true);const [isTheme, setTheme] = useState(true);";

  const AppProps = {
    isTheme,
    setTheme,
    isMenu,
    setMenu,
  };

  return (
    <AppContext.Provider
      value={{ AppProps, isTheme, setTheme, isMenu, setMenu }}
    >
      <Navbar />
      <DarkMode />

      <div className="w-[80%] my-0 mx-auto md:w-[90%]">
        <Home />
      </div>
      {/* <SocialMedia /> */}

      <Footer />
    </AppContext.Provider>
  );
}

export default App;
