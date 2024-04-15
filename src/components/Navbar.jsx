import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  useEffect(() => {
    console.log("theme", theme);
  }, []);
  return (
    <>
      <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 z-30 ">
        <div>
          <h1 className=" text-5xl font-signature ml-2">Yash</h1>
        </div>
        <ul className=" sm:flex hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 delay-100 "
            >
              {link}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500  sm:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul
            className=" text-gray-500  flex flex-col absolute top-0 left-0 w-full h-screen
           justify-center items-center bg-gradient-to-b from-black to-gray-700 sm:hidden   "
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl "
              >
                {link}
              </li>
            ))}
          </ul>
        )}
        <div>
          {theme == "dark" ? (
            <BsFillSunFill
              className=" text-[35px] bg-blue-gray-100 text-black cursor-pointer rounded-full p-2"
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
            />
          ) : (
            <BsFillMoonFill
              className=" text-[35px] bg-blue-gray-100 text-black rounded-full p-2 cursor-pointer"
              onClick={() => {
                setTheme("dark");
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
