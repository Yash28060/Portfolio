import React from "react";

function About() {
  return (
    <>
      <div
        name="about"
        className=" w-full h-full md:h-screen dark:text-gray-300"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className=" pb-8">
            <p className=" text-4xl font-bold inline border-b-4  border-gray-400">
              About
            </p>
          </div>

          <p className="text-xl mt-20 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            maiores nemo quibusdam tempora perferendis dolor laboriosam itaque
            rerum aspernatur fugit voluptatum minima? Corporis cumque excepturi
            est doloribus. Explicabo impedit ducimus vitae possimus ab molestias
            vel aliquam voluptate aut, dolores quasi autem et maxime itaque.
            Perspiciatis assumenda eligendi aperiam labore amet!
          </p>
          <br />
          <p className=" text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            aliquam distinctio vel aliquid! Earum, sint illo? Saepe, impedit
            architecto recusandae eaque non velit, consequatur praesentium
            corrupti perferendis, quisquam ducimus aspernatur voluptas delectus?
            Libero esse porro recusandae fugit amet! Tempore saepe, numquam quod
            quia perferendis animi eum perspiciatis consectetur laboriosam
            obcaecati.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
