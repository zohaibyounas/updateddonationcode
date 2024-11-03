import React, { useState } from "react";
import { useFormik } from "formik";
import ContactImg from "../assest/contact.png";
import axios from "axios";

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(""); // State to handle feedback messages

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post(
          "https://donation-site-ashen.vercel.app/api/submit",
          values
        );
        console.log(response.data);
        setSubmissionStatus("Form submitted successfully");
        resetForm(); // Reset form on successful submission
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmissionStatus(
          "There was an error submitting the form. Please try again."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section
      id="contact"
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20"
    >
      <div className="lg:w-[50%] w-full">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={ContactImg}
          alt="contact"
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-8 bg-black lg:p-16 p-8 rounded-3xl ml-7"
      >
        <h1 className="text-white text-[45px] font-semibold font-ubuntu">
          Let's Contact Us
        </h1>
        <form
          id="form-box"
          className="w-full bg-transparent flex flex-col justify-center items-center gap-4"
          onSubmit={formik.handleSubmit}
        >
          <input
            type="text"
            className="w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu"
            placeholder="Enter your full name here"
            {...formik.getFieldProps("name")}
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-sans"
            {...formik.getFieldProps("email")}
          />

          <input
            type="text"
            placeholder="Enter your mobile number here"
            className="w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu"
            {...formik.getFieldProps("mobile")}
          />

          <textarea
            className="w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu"
            placeholder="Enter your message"
            rows="4"
            {...formik.getFieldProps("message")}
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-white px-6 py-4 w-full rounded-md font-semibold text-md font-ubuntu"
          >
            Submit Now
          </button>
        </form>
        {submissionStatus && (
          <p className="mt-4 text-white font-ubuntu">{submissionStatus}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
