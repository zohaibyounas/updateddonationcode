import React from "react";
import video from "../assest/donationvideo.mp4";
import DonateBtn from "../DonateBtn";
import { TokenProvider } from "../context/TokenSecret";

function VideoPortion() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 mt-9">
        {/* Video Section */}
        <div className="flex justify-center items-center rounded-2xl w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none lg:h-[500px]">
          <video className="w-full h-full rounded-2xl" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text and Button Section with Shadow */}
        <div className="bg-slate-200 mt-10 rounded-md p-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none h-auto lg:h-[460px] shadow-lg">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 lg:mt-0">
            Sponsor a Student's Success
          </h1>
          <p className="text-gray-700 mt-4 text-base sm:text-lg tracking-wide font-sans">
            Your sponsorship can unlock a student's potential by providing
            crucial resources and opportunities. Many students face significant
            obstacles that hinder their academic progress, such as lack of
            access to textbooks, technology, and tutoring. Your donation helps
            bridge this gap, ensuring that every student has the tools they need
            to succeed.
          </p>
          <TokenProvider>
            <div className="mt-6">
              <DonateBtn />
            </div>
          </TokenProvider>
        </div>
      </div>
    </div>
  );
}

export default VideoPortion;
