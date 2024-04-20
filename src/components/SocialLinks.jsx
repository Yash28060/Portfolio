import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const link = [
    {
      id: 1,
      link: "LinkedIn",
      logo: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/yash-saini-964341228/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      link: "Github",
      logo: <FaGithub size={30} />,
      href: "https://github.com/Yash28060?tab=repositories",
    },
    {
      id: 3,
      link: "Gmail",
      logo: <HiOutlineMail size={30} />,
      href: "mailto:yashkumarsaini@gmail.com",
    },
    {
      id: 4,
      link: "Resume",
      logo: <BsFillPersonLinesFill size={30} />,
      href: "https://drive.google.com/file/d/1zVWuJSZCCE4RQDPIbWEnAcB5tSsCaRGM/view?usp=sharing",
      style: "rounded-br-md",
    },
  ];
  return (
    <>
      <div className=" z-20 hidden lg:flex flex-col top-[35%] left-0 fixed  ">
        <ul>
          {link.map(({ id, link, href, style, logo }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:m-[-10px] duration-300" +
                " " + style
              }>
              <a
                href={href}
                className=" flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                <>
                  {link}
                  {logo}
                </>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
