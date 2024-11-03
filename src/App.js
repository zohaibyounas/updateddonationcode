import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "../src/components/heroSection/card";
import VideoPortion from "./components/heroSection/VideoPortion";
import About from "./components/heroSection/About";
import WhatWeDo from "./components/heroSection/WhatWeDo";
import Blogs from "./components/heroSection/Blogs";
import BlogDetail from "./components/heroSection/BlogDetail";
import Main from "./components/heroSection/Main";
import Contact from "./components/heroSection/Contact";
import Footer from "./components/heroSection/Footer";
import VcImg from "./components/assest/vc.jpeg";
import HodImg from "./components/assest/images4.jpg";
import Superviser from "./components/assest/sir.png";
import DrSijad from "./components/assest/img5.png";
import DrJameel from "./components/assest/img6.jpg";
import DrTauseef from "./components/assest/img7.jpg";
import Form from "./components/Form";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

const blogs = [
  {
    id: 1,
    image: VcImg,
    location: "Peshawar, KPK",
    title: "Vice Chancellor of Islamia University peshawar",
    content: `In today's fast-paced educational environment, effective management and streamlined communication are crucial for the success of any institution. Recognizing this need, Islamia College has introduced the Vice Chancellor Portal, a web-based platform designed to optimize the administrative tasks and communication for the Office of the Vice Chancellor. This innovative portal represents a significant step forward in enhancing the efficiency of operations, providing a centralized hub for managing college activities, facilitating communication between departments, and ensuring the smooth execution of institutional policies.
      
      `,
    content1: `One of the primary benefits of the Vice Chancellor Portal is its ability to streamline administrative tasks. The portal consolidates various administrative functions into a single, user-friendly interface, making it easier for the Office of the Vice Chancellor to manage day-to-day operations. This includes everything from scheduling meetings and tracking departmental progress to overseeing budget allocations and handling student affairs. By automating and simplifying these tasks, the portal allows the Vice Chancellor and their team to focus more on strategic planning and less on administrative overhead.`,
    date: "15 Jan, 2024",
  },

  {
    id: 2,
    image: HodImg,
    location: "Peshawar, KPK",
    title: "Head of Computer Secince Department - Dr. Atif",
    content:
      "Dr. Atif, a distinguished academic and researcher, serves as the Head of Department at Islamia University Peshawar. With a robust background in Computer Science Dr. Atif brings a wealth of experience and expertise to the role. His leadership and dedication to academic excellence have been instrumental in shaping the department's vision and goals.",
    date: "15 Jan, 2024",
  },
  {
    id: 3,
    image: Superviser,
    location: "Peshawar, KPK",
    title: "Dr. Mansoor - A Talented Teacher and Researcher",
    content:
      "Dr. Mansoor is one of the most talented and dedicated teachers in our department at Islamia University Peshawar. With a profound expertise in web technologies and artificial intelligence (AI), Dr. Mansoor has significantly contributed to both academic and research domains. His passion for teaching and innovation makes him a valued member of our faculty.",
    date: "15 Jan, 2024",
  },
  {
    id: 4,
    image: DrSijad,
    location: "Peshawar, KPK",
    title:
      "Dr. Sajjad - A Leading Researcher and Expert in Artificial Intelligence",
    content:
      "Dr. Sajjad is a prominent figure in the field of artificial intelligence (AI) and a dedicated researcher at our department at Islamia University Peshawar. With an impressive track record of pioneering research and contributions to AI, Dr. Sajjad is recognized as one of the leading experts in the field. His innovative approach and profound knowledge make him an invaluable asset to our academic community.",
    date: "15 Jan, 2024",
  },
  {
    id: 5,
    image: DrJameel,
    location: "Peshawar, KPK",
    title: "Dr. Jameel - Expert in Web Development and Artificial Intelligence",
    content:
      "Dr. Jameel is a distinguished professor in our department at Islamia University Peshawar, known for his exceptional contributions to web development and artificial intelligence (AI). His expertise and innovative research in these fields have made him a respected figure in academia and industry alike. Dr. Jameel's dedication to teaching and research has significantly impacted both his students and the broader technological community.",
    date: "15 Jan, 2024",
  },
  {
    id: 6,
    image: DrTauseef,
    location: "Peshawar, KPK",
    title:
      "Sir Touseef - Specialist in Web Development Lecturer in CS department",
    content:
      "Sir Touseef is a highly respected instructor in our department at Islamia University Peshawar, renowned for his expertise in web development. His extensive knowledge and practical experience in web technologies have made him an essential member of our academic community. Sir Touseef's dedication to teaching and his innovative approach to web development have significantly influenced his students and peers.",
    date: "15 Jan, 2024",
  },
];

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div id="main">
                <Main />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="what-we-do">
                <WhatWeDo />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <Card
                className="flex items-center bg-gray-100"
                title="Support Struggling Students"
                text="Your support can make a world of difference for students facing financial hardships. By donating, you enable them to access quality education, essential materials, and support services that can help them break free from the cycle of poverty and build a better future.With your help, students can overcome obstacles, excel in their studies, and pursue their dreams, ultimately leading to a brighter and more prosperous future for all."
                buttonText="Click Me"
              />
              <VideoPortion />
              <Blogs blogs={blogs} />
            </div>
          }
        />
        <Route path="/blogs/:id" element={<BlogDetail blogs={blogs} />} />
        <Route path="/login" element={<Form />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
