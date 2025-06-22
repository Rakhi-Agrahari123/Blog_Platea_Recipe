import React, { useEffect, useState } from "react";
import Dishon_login from "../assets/pics/delicious-food-table.jpg";
import bgimg from "../assets/pics/deliciouse-pasta-with-vegetables.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handlesuccess } from "../util";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/slices/AuthSlice";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading, auth, successLoginMessage } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (successLoginMessage) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [successLoginMessage, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    if (!email || !password) {
      return handleError("Email and password are required.");
    }
dispatch(loginThunk ({email, password}));


  //   try {
  //     const response = await fetch("http://localhost:5000/api/user/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(loginData),
  //     });

  //     const result = await response.json();
  //     const { success, msg, token } = result;

  //     if (success) {
  //       handlesuccess(msg);
  //       localStorage.setItem("token", token);
  //       setTimeout(() => navigate("/home"), 1000);
  //     } else {
  //       handleError(msg || "Login failed.");
  //     }
  //   } catch (error) {
  //     handleError("Server error: " + error);
  //   }
  // };

  }
  return (
    <div
      className="min-h-[100vh] flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl bg-white/30 backdrop-blur-md border border-gray-200">
        <div className="md:w-1/2 w-full h-[300px] md:h-auto">
          <img
            src={Dishon_login}
            alt="Login Visual"
            loading="lazy"
            className="w-full h-full object-cover contrast-125 opacity-90"
          />
        </div>

        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <label className="text-sm text-white">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-sm text-black hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </form>
          <ToastContainer />
          <p className="text-sm text-center text-white mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-black hover:underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
