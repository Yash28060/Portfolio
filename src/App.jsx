import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import { ThemeContext } from "./context/ThemeContext";
import { useEffect, useState } from "react";
import "./index.css";
import Projects from "./components/Projects";

function App() {
  const [theme, setTheme] = useState("dark");
  // useEffect(() => {
  //   setTheme(
  //     localStorage.getItem("theme") ? localStorage.setItem("theme","light") : "dark"
  //   );
  // }, []);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={`${theme} ${
            theme == "dark"
              ? "bg-gradient-to-b from-black via-black to-gray-800"
              : null
          }`}
        >
          <Navbar />
          <Home />
          <About />
          <SocialLinks />
          <Projects />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
