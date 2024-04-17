import React, { useState, useEffect } from "react";
import GameSearcher from "../assets/portfolio/GameSearcher.jpeg";
import TaskListing from "../assets/portfolio/TaskListingApp.jpeg";
import DietTool from "../assets/portfolio/DietTool.jpeg";
import ImageEditor from "../assets/portfolio/ImageEditor.jpeg";
import { data } from "../components/data/Data";
import Modal from "./Modal";
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
        className=" w-full h-full  dark:text-gray-300 md:h-screen"
      >
        <div className=" max-w-screen-lg p-4 mx-auto grid grid-flow-row  w-full ">
          <div className="pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="text-xl mt-20 py-6">Check out some of my work</p>
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
                    className="relative bg-local h-80 rounded-t-md duration-200 overflow-hidden"
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
                      <div className="mb-3 font-medium  text-white p-4">
                        {project.description.p.length > 100
                          ? `${project.description.p.slice(0, 300)}...`
                          : project.description.p}
                      </div>
                      <button
                        type="button"
                        key={project.name}
                        onClick={(e) => {
                          setProject(e.target.name);
                          setHidden(true);
                        }}
                        name={JSON.stringify(project)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Know More
                        <svg
                          className="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <a href={project.link.deploy} data-modal-hide="staticModal" type="button" className=" font-bold dark:text-gray-300 pl-3 flex w-1/2 px-6  m-4 duration-200 hover:scale-105 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi -rotate-45 mr-1 bi-link" viewBox="0 0 16 16"> <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" /> <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" /> </svg>
                                        <span className=" hover:opacity-75">Demo</span> </a>
                                    <a href={project.link.github} data-modal-hide="staticModal" type="button" className=" font-bold dark:text-gray-300 pl-4 flex w-1/2  m-4 duration-200 hover:scale-105">
                                        <svg aria-hidden="true" className="octicon mr-2 octicon-mark-github" height="18" version="1.1" viewBox="0 0 16 16" width="18" ><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" ></path></svg>
                                        <span className=" hover:opacity-75">Github</span></a>
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
        {hidden && (
          <Modal projects={project} hidden={hidden} setHidden={setHidden} />
        )}
      </div>
    </>
  );
};

export default Projects;
