import React from "react";
import "./Style.css";
import image1 from "../assest/img1.jpg";
import image2 from "../assest/img2.jpg";
import DonateBtn from "../DonateBtn";
import { TokenProvider } from "../context/TokenSecret";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 bg-white lg:ml-60">
      <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <div className="absolute z-10 top-0 left-0 lg:left-auto lg:right-0 transform lg:-translate-x-1/4 lg:translate-y-1/4">
          <img
            src={image1}
            alt="Volunteers"
            className="rounded-lg shadow-lg w-[200px] lg:w-[350px]"
          />
        </div>
        <div className="mt-24 lg:mt-48">
          <img
            src={image2}
            alt="Child Writing"
            className="rounded-lg shadow-lg w-[300px] lg:w-[450px]"
          />
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-1/2 text-center lg:text-left bg-gray-200 p-6 lg:p-10 rounded-lg shadow-lg">
        <span className="font-sans font-semibold text-lg lg:text-xl text-yellow-500">
          ABOUT US
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 mt-5 text-gray-800">
          Support the Computer Science Department
        </h2>
        <p className="text-gray-700 mb-6 text-base lg:text-lg tracking-wide font-sans leading-relaxed">
          Your generous donation will help foster innovation, support
          cutting-edge research, and provide valuable resources for students and
          faculty in the Computer Science Department. Join us in shaping the
          future of technology and empowering the next generation of tech
          leaders.
        </p>

        <TokenProvider>
          <div className="flex justify-center lg:justify-start">
            <DonateBtn className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105" />
          </div>
        </TokenProvider>
      </div>
    </section>
  );
};

export default About;
