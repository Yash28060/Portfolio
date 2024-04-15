import React, { useState, useEffect } from "react";
import GameSearcher from "../assets/portfolio/GameSearcher.jpeg";
import TaskListing from "../assets/portfolio/TaskListingApp.jpeg";
import DietTool from "../assets/portfolio/DietTool.jpeg";
import ImageEditor from "../assets/portfolio/ImageEditor.jpeg";
import { data } from "../components/data/Data";
import Modal from "./Modal"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Projects = () => {
  const images = [
    {
      id: 1,
      src: GameSearcher,
    },
    {
      id: 2,
      src: TaskListing,
    },
    {
      id: 3,
      src: DietTool,
    },
    {
      id: 4,
      src: ImageEditor,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [project, setProject] = useState(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setEndIndex(window.innerWidth < 720 ? images.length - 1 : 1);
      setStartIndex(window.innerWidth < 720 ? 0 : startIndex);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (endIndex < images.length - 1) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  return (
    <>
      <div
        name="portfolio"
        className=" w-full h-full  dark:text-white md:h-screen"
      >
        <div className=" max-w-screen-lg p-4 mx-auto grid grid-flow-row  w-full ">
          <div className="pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className=" py-6">Check out some of my work</p>
          </div>
          <div>
            <button
              className=" text-2xl font-bold relative top-[40%] z-10 xl:left-[-10%] left-0 hidden md:flex"
              onClick={handlePrev}
              disabled={startIndex === 0}
              style={{ visibility: startIndex === 0 ? "hidden" : "visible" }}
            >
              <MdOutlineArrowBackIosNew
                size={50}
                className="bg-blue-gray-400  text-white dark:bg-cyan-500 rounded-full p-2 hover:opacity-75 hover:scale-90 duration-200"
              />
            </button>

            <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0 ">
              {data.slice(startIndex, endIndex + 1).map((project, index) => (
                <div
                  key={project.name}
                  className="  shadow-md shadow-gray-600 rounded-lg text-center overflow-hidden "
                >
                  <div
                    className="relative bg-local h-80 rounded-md duration-200 overflow-hidden"
                    style={{
                      backgroundImage: `url(${images[startIndex + index].src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50  opacity-0 hover:opacity-100 transition-opacity duration-400  mt-8">
                      <h1 className="text-white text-2xl font-bold">
                        {project.name}
                      </h1>
                      <div className="mb-3 font-medium text-black dark:text-white p-4">
                        {project.description.p.length > 100
                          ? `${project.description.p.slice(0, 300)}...`
                          : project.description.p}
                      </div>
                      <button type="button" key={project.name} onClick={(e) => { setProject(e.target.name); setHidden(true) }} name={JSON.stringify(project)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Know More
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                    </div>
                  </div>
                  <div className=" flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="text-2xl font-bold relative xl:right-[-105%] top-[-50%] z-10  right-[-95%] hidden md:flex  "
              onClick={handleNext}
              disabled={endIndex === images.length - 1}
              style={{
                visibility:
                  endIndex === images.length - 1 ? "hidden" : "visible",
              }}
            >
              <MdOutlineArrowForwardIos
                size={50}
                className="
               bg-blue-gray-400  text-white dark:bg-cyan-500 rounded-full p-2 hover:opacity-75 hover:scale-90 duration-200"
              />
            </button>
          </div>
        </div>
        {hidden && <Modal projects={project} hidden={hidden} setHidden={setHidden} />}
      </div>
    </>
  );
};

export default Projects;
