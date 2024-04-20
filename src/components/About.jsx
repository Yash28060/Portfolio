import React from "react";
import {useState, useEffect, useRef} from "react";
import  {info}  from "./data/Data"
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";


function About() {
  const elementRef = useRef()
    const [typer, setTyper] = useState("Initialising Typer")
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (elementRef.current) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(elementRef.current);
                    }
                });
            });
            observer.observe(elementRef.current);
        }
    }, [elementRef]);
  return (
    <>
      <div
        name="about"
        className=" w-full h-full md:h-screen dark:text-gray-300"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div id="aboutSection" value="navAboutme">
                <h1 ref={elementRef} className="text-4xl  inline font-bold  border-b-4 border-gray-400">About Me</h1>
                <div id="aboutme" className="max-w-screen-lg m-auto flex flex-col items-center  h-full  md:flex-row gap-24 ">
                    {isVisible && <div className="w-full text-xl max-lg:w-full  py-10 h-full">
                        <div id="typer" className="typer pb-3 text-red-700">
                            {typer}
                        </div>
                        <TypeAnimation cursor={false} speed={85} sequence={[
                            1500,
                            () => {
                                setTyper("Typing")
                                document.getElementById("cursor").classList.add("cursor")
                                document.getElementById("typer").classList.remove("text-red-700")
                                document.getElementById("typer").classList.add("text-yellow-500")
                            },
                            info,
                            () => {
                                setTyper("Typing Done")
                                document.getElementById("typer").classList.remove("typer")
                                document.getElementById("cursor").classList.remove("cursor")
                                document.getElementById("typer").classList.add("text-green-500")
                            }
                        ]} />
                        <div id="cursor" className="h-full "></div>
                    </div>}
                    <div>
            <img
              src={profile}
              alt="myPic"
              className=" rounded-3xl mx-auto w-2/3 md:w-full "
            />
          </div>
                </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default About;
