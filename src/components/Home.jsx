import React from "react";
import profile from "../assets/profile.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {Link} from "react-scroll";


const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-full  w-full md:h-screen mb-6  "
      >
        <div className=" max-w-screen-lg m-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-32">
          <div className=" flex flex-col justify-center h-full">
            <h2 className=" text-4xl sm:text-7xl font-bold dark:text-gray-300 mt-20">
              I'm a Frontend Developer
            </h2>
            <p className=" dark:text-gray-300 py-4  max-w-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium autem porro, facere exercitationem alias in at neque
              officia amet omnis possimus aspernatur molestiae maiores modi
              quasi suscipit sed quam culpa.
            </p>
            <div>
              <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer hover:scale-105 duration-300">
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
          <div>
            <img
              src={profile}
              alt="myPic"
              className=" rounded-3xl   mx-auto w-2/3 md:w-full "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
