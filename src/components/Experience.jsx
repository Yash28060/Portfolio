import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/reactImage.png";
import github  from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import vscode from "../assets/vscode.jpg";





function Experience() {
    const experience = [
        {
            id: 1,
            title: "HTML",
            image: html,
            style: 'shadow-orange-500 hover:shadow-orange-300 '
        },
        {
            id: 2,
            title: "CSS",
            image: css,
            style: 'shadow-blue-500 hover:shadow-blue-300 '
        },
        {
            id: 3,
            title: "JavaScript",
            image: javascript,
            style: 'shadow-yellow-500 hover:shadow-yellow-300 '
        },
        {
            id: 4,
            title: "React",
            image: reactImage,
            style: 'shadow-blue-500 hover:shadow-blue-300 '
        },
        {
            id: 5,
            title: "Tailwind",
            image: tailwind,
            style: 'shadow-blue-500 hover:shadow-blue-300 '
        },
        {
            id: 6,
            title: "GitHub",
            image: github,
            style: 'shadow-gray-500 hover:shadow-gray-300 '
        },
        {
            id: 7,
            title: "JAVA",
            image: java,
            style: 'shadow-red-500 hover:shadow-red-300 '
        },
        {
            id: 8,
            title: "MySQL",
            image: mysql,
            style: 'shadow-blue-500 hover:shadow-red-300 '
        },
        {
            id: 9,
            title: "Vs Code",
            image: vscode,
            style: 'shadow-purple-500 hover:shadow-purple-300 '
        },
    ];
  return (
    <>
        <div name='experience' className="  w-full h-full  dark:text-gray-300 md:h-screen">
            <div className=" max-w-screen-lg mx-auto p-4  w-full h-full dark:text-white">
                <div className="pb-8">
                <p className=" text-4xl font-bold inline border-b-4  border-gray-500 p-2 ">Experience</p>
                <p className=" text-xl mt-10  py-6">Technologies I have worked on</p>
                </div>
                <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
                       {experience.map(({id,image,title,style}) => (
                            <div key={id} className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer ${style}`}>
                                <img src={image} alt={title} className="w-24 h-24 mx-auto" />
                                <p className="py-2">{title}</p>
                            </div>
                        ))}
                        
                    
                </div>
            </div>
        </div>
    </>
  );
}

export default Experience;
