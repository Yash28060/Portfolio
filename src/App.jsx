import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import { ThemeContext } from "./context/ThemeContext";
import { useEffect, useState } from "react";
import "./index.css";
import Projects from "./components/Projects";
import Experience from "./components/Experience";


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
              ? "bg-gradient-to-b from-black via-gray-800 to-gray-900"
              : null
          }`}
        >
          <Navbar />
          <Home />
          <About />
          <SocialLinks />
          <Projects />
          <Experience />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
