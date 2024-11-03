import React from "react";
import { FaHandsHelping, FaDonate, FaUserGraduate } from "react-icons/fa";

function WhatWeDo() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-sans font-bold mt-20 flex justify-center items-center">
        What we do
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 gap-8">
        <div className="flex flex-col bg-slate-100 rounded mb-4 h-[450px] w-full mx-auto lg:mt-14 mt-5 p-4 shadow-lg  duration-300 hover:shadow-2xl hover:bg-yellow-300 hover:transition hover:scale-110">
          <h2 className="text-center text-yellow-500 font-sans font-medium tracking-widest mt-10">
            SAVE THE STUDENT
          </h2>
          <span className="text-2xl font-bold font-sans text-center mt-8">
            Support Our Future Innovators
          </span>
          <span className="text-center font-sans tracking-wider mt-4 px-6">
            Your contribution can make a significant difference in the lives of
            students. By donating, you help provide essential resources,
            financial support, and opportunities for students to succeed.
          </span>
          <FaUserGraduate
            className="mt-8 mx-auto text-black transition-colors duration-300 hover:text-yellow-500"
            size="40px"
            style={{ fontSize: "4rem", lg: "5rem" }}
          />
        </div>

        <div className="flex flex-col bg-slate-100 rounded mb-4 h-[450px] w-full mx-auto lg:mt-14 mt-5 p-4 shadow-lg hover:transition hover:scale-110 duration-300 hover:shadow-2xl hover:bg-yellow-300">
          <h2 className="text-center text-yellow-500 font-sans font-medium tracking-widest mt-10">
            HELP THE HELPLESS STUDENT
          </h2>
          <span className="text-2xl font-bold font-sans text-center mt-8">
            Invest in Tomorrow's Leaders
          </span>
          <span className="text-center font-sans tracking-wider mt-4 px-6">
            Your donation can transform the lives of students. By contributing,
            you provide critical support, resources, and opportunities that
            enable students to overcome challenges and achieve academic success.
          </span>
          <FaHandsHelping
            className="mt-8 mx-auto text-black transition-colors duration-300 hover:text-yellow-500"
            size="40px"
            style={{ fontSize: "4rem", lg: "5rem" }}
          />
        </div>

        <div className="flex flex-col bg-slate-100 rounded mb-4 h-[450px] w-full mx-auto lg:mt-14 mt-5 p-4 shadow-lg hover:transition hover:scale-110 duration-300 hover:shadow-2xl hover:bg-yellow-300">
          <h2 className="text-center text-yellow-500 font-sans font-medium tracking-widest mt-10">
            DONATE FOR THE POOR STUDENT
          </h2>
          <span className="text-2xl font-bold font-sans text-center mt-8">
            Empower Education
          </span>
          <span className="text-center font-sans tracking-wider mt-4 px-6">
            Your generous donation can change the life of a student in need. By
            supporting this cause, you help provide essential resources,
            financial aid, and opportunities for underprivileged students to
            pursue their education and dreams.
          </span>
          <FaDonate
            className="mt-8 mx-auto text-black transition-colors duration-300 hover:text-yellow-500"
            size="40px"
            style={{ fontSize: "4rem", lg: "5rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
