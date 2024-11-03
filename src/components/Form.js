import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Form = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://donation-site-three.vercel.app/api/login",
        {
          email,
          password,
        }
      );
      console.log("response", response);
      const token = response.headers["token"];
      if (token) {
        localStorage.setItem("token", token);
        toast.success(`User ${email} has successfully Logged In`);
        navigate("/");
      } else {
        toast.error("Token not received from server");
      }
    } catch (error) {
      console.error("login error:", error);
      toast.error(error.response?.data?.message || "login failed");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center mb-10 mt-28 ml-2 xl:mx-8 rounded bg-transparent"
      style={{
        backgroundImage:
          "url('https://i.redd.it/islamia-college-peshawar-pakistan-v0-zyy8lfo8zcx91.jpg?width=1080&format=pjpg&auto=webp&s=e20bb64198f994ee95777c183716ecca191af150')",
        opacity: "90%",
      }}
    >
      <div className="flex flex-col max-w-md p-6 mt-4 mb-32 ml-[1px] rounded-md sm:p-10 opacity-100 bg-black  text-black">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-white">Login</h1>
          <p className="text-sm text-white">Sign in to access your account</p>
        </div>
        <form noValidate className="space-y-12" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 lg:mr-[280px] text-white text-sm"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm text-white">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="***"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link
                to="/forgot-password"
                className="text-xs lg:mr-64 text-white hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold mb-2 rounded-md bg-white text-black hover:bg-yellow-500 hover:text-black hover:scale-110"
              >
                Log in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-white">
              Don't have an account yet?
              <Link to="/signup" className="hover:underline text-white">
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
