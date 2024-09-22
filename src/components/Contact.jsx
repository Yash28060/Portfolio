import React from "react";

function Contact() {
  return (
    <>
      <div name="contact" className=" h-full dark:text-gray-300">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full  ">
          <div className="pb-8" style={{ marginTop: "4rem" }}>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6 text-xl mt-10">
              Submit the form below to get in touch with me
            </p>
          </div>
          <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
            <div className="bg-white dark:bg-transparent max-w-4xl mx-auto w-full">
              <div className="grid grid-cols-6 h-full">
                <div className="bg-blue-50 dark:bg-transparent p-10 col-span-2 sm:block hidden ">
                  <h2 className="mb-14 font-bold md:text-2xl  dark:text-gray-300 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                    {" "}
                    Contact Info
                  </h2>
                  <p className="font-bold dark:text-gray-300 md:text-xl text-xs py-8 border-b border-blue-700 ">
                    Location Address
                    <span className="font-normal text-xs lg:text-sm text-blue-300 block">
                      Meerut, Uttar Pradesh
                    </span>
                  </p>
                  <p className="font-bold   dark:text-gray-300 md:text-xl text-xs py-8 border-b border-blue-700">
                    Email Address
                    <span className="font-normal text-xs break-words  lg:text-sm text-blue-300 block">
                      yashkumarsaini2016@gamail.com
                    </span>
                  </p>
                </div>
                <div className="dark:bg-transparent sm:border-l-2 sm:p-10 p-0 ml-10  col-span-4 items-center justify-center  ">
                  <h2 className="mb-14 font-bold text-xl   md:text-2xl dark:text-gray-300 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                    Message Me Directly
                  </h2>
                  <form action="https://getform.io/f/pbqgegwb" method="POST">
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="tel"
                          pattern="[0-9]{10}"
                          name="phone"
                          id="floating_phone"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_phone"
                          className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          First Name *
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="company"
                          id="floating_company"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_company"
                          className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Last Name *
                        </label>
                      </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="email"
                        name="email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email address *
                      </label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="tel"
                          pattern="[0-9]{10}"
                          name="phone"
                          id="floating_phone"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_phone"
                          className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Phone Number *
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="company"
                          id="floating_company"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_company"
                          className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Company
                        </label>
                      </div>
                    </div>
                    <div className="mb-6">
                      <textarea
                        className="w-full rounded-2xl dark:bg-white bg-blue-50 placeholder:text-md px-6 py-4 text-gray-500"
                        placeholder="Your message..."
                        name="message"
                        rows="8"
                      ></textarea>
                    </div>
                    <div className="flex justify-center">
                      <button className=" py-4 rounded-xl bg-gradient-to-r from-cyan-500 to to-blue-500 dark:text-white font-bold w-full  hover:scale-105 hover:opacity-95 transition-all delay-200">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
