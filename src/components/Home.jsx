"use client";
import React from "react";
import profile from "../assets/profile.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <>
      <div name="home" className="h-full  w-full md:h-screen mb-6  ">
        <div className=" max-w-screen-lg m-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-32">
          <div className=" flex flex-col h-full w-screen text-center justify-center content-center items-center align-middle">
            <h2 className=" text-4xl sm:text-7xl font-bold dark:text-gray-300 mt-20">
              Yash Kumar Saini
            </h2>
            <ReactTypingEffect
              className="text-3xl dark:text-gray-300 py-4  max-w-md"
              eraseSpeed={50}
              text={[
                "Front-End Web Developer",
                "Problem Solver",
                "Coder",
                "Java Programmer",
              ]}
            />
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer hover:scale-105 duration-300"
              >
                Portfolio
                <span className="group-hover:rotate-90 group-hover:scale-115 duration-300 ">
                  <MdOutlineKeyboardDoubleArrowRight
                    size={20}
                    className="ml-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
