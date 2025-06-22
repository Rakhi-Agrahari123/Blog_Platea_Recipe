// import React, { useEffect, useState } from "react";
// import Dishon_login from "../assets/pics/delicious-food.jpg";
// // import axios from "axios";

// import bgimg from "../assets/pics/deliciouse-pasta-with-vegetables.jpg";
// import { ToastContainer } from "react-toastify";
// import { handleError, handlesuccess } from "../util";
// import { useNavigate, Link } from "react-router-dom";

// import { signUpThunk } from "../redux/slices/AuthSlice";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     role:"",
//   });

//   const [img, setImg] = useState(null);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { user, loading, error, successMessage } = useSelector(
//     (state) => state.auth
//   );

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const path = window.location.pathname;

//     if (token && (path === "/login" || path === "/signup")) {
//       navigate("/");
//     }
//   }, []);

//   useEffect(() => {
//     if (successMessage) {
//       handlesuccess(successMessage);
//       setTimeout(() => {
//         navigate("/login");
//         window.location.reload();
//       }, 1000);
//     } else if(error){
//       handleError(error);
//     }
//   }, [successMessage, error,navigate]);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { username, email, password } = formData;

//     if (!username || !email || !password) {
//       return handleError("Username, email or password are required");
//     } else if (error) {
//       handleError(error);
//     }

//     const data = new FormData();
//     data.append("username", username);
//     data.append("email", email);
//     data.append("password", password);
//     data.append("profilePicture", img);
// data.append("role", formData.role);

  
//     dispatch(signUpThunk(data));

// //     await axios.post('/api/user/register', data, {
// //   headers: {
// //     'Content-Type': 'multipart/form-data',
// //   }
// // });A

//   //   try {
//   //     const url = "http://localhost:5000/api/user/register";

//   //     const response = await fetch(url, {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-type": "application/json",
//   //       },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     const result = await response.json();
//   //     const { success, msg } = result;
//   //   } catch (error) {
//   //     handleError(error.message || "Something went wrong");
//   //   }
//   // };

//   }
//   return (
//     <div
//       className="relative min-h-[100vh] flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${bgimg})` }}
//     >
//       <div className="absolute inset-0 bg-opacity-60 backdrop-blur-none  z-0"></div>

//       <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl bg-white/30 backdrop-blur-md border border-gray-200">
//         {/* Left Form */}
//         <div className="md:w-1/2 w-full p-8">
//           <h2 className="text-3xl font-semibold text-center text-white mb-6">
//             Sign Up
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="username"
//                 className="block text-sm font-medium text-white mb-1"
//               >
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 id="username"
//                 placeholder="Enter your name"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-white mb-1"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-white mb-1"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
// {/* role */}
// <div className="mb-4">
//   <label
//     htmlFor="role"
//     className="block text-sm font-medium text-white mb-1"
//   >
//     Role
//   </label>
//   <select
//     name="role"
//     id="role"
//     value={formData.role}
//     onChange={handleChange}
//     className="w-full px-4 py-2 border rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
//   >
//     <option value="user">User</option>
//     <option value="admin">Admin</option>
//   </select>
// </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="profilePicture"
//                 className="block text-sm font-medium text-white mb-1"
//               >
//                 Profile Picture
//               </label>
//               <input
//                 type="file"
//                 name="profilePicture"
//                 id="profilePicture"
//                 accept="image/*"
//                 onChange={(e) => setImg(e.target.files[0])}
//                 className="w-full px-4 py-2 border rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />

//               {/*  */}
//               {img && (
//   <img src={URL.createObjectURL(img)} alt="preview" className="w-20 h-20 mt-2 items-center rounded-full" />
// )}

//             </div>
//             <div className="flex justify-between items-center mb-4 text-white">
//               <label className="text-sm">
//                 <input type="checkbox" className="mr-2" /> Remember me
//               </label>
//               <a href="#" className="text-sm text-blue-200 hover:underline">
//                 Forgot password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-green-500 transition duration-300"
//             >
//               Sign Up
//             </button>
//           </form>

//           <p className="text-sm text-center text-white mt-6">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-300 hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 w-full h-[300px] md:h-auto">
//           <img
//             src={Dishon_login}
//             alt="Signup Visual"
//             loading="lazy"
//             className="w-full h-full object-cover contrast-125 opacity-90"
//           />
//         </div>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Signup;

import React, { useEffect, useState } from "react";
import Dishon_login from "../assets/pics/delicious-food.jpg";
import bgimg from "../assets/pics/deliciouse-pasta-with-vegetables.jpg";
import { ToastContainer } from "react-toastify";
import { handleError, handlesuccess } from "../util";
import { useNavigate, Link } from "react-router-dom";
import { signUpThunk } from "../redux/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", // default to user
  });

  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, successMessage } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const path = window.location.pathname;
    if (token && (path === "/login" || path === "/signup")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (successMessage) {
      handlesuccess(successMessage);
      setTimeout(() => {
        navigate("/login");
        window.location.reload();
      }, 1000);
    } else if (error) {
      handleError(error);
    }
  }, [successMessage, error, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, role } = formData;

    if (!username || !email || !password) {
      return handleError("Username, email or password are required");
    }

    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);
    data.append("role", role);
    if (img) data.append("profilePicture", img);

    dispatch(signUpThunk(data));
  };

  return (
    <div
      className="relative min-h-[100vh] flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="absolute inset-0 bg-opacity-60 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl bg-white/30 backdrop-blur-md border border-gray-200">
        {/* Left Form */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Role */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-white mb-1">
                Role
              </label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Profile Picture */}
            <div className="mb-4">
              <label htmlFor="profilePicture" className="block text-sm font-medium text-white mb-1">
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
                className="w-full px-4 py-2 border rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400"
              />
              {img && (
                <img
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-20 h-20 mt-2 rounded-full"
                />
              )}
            </div>

            {/* Extras */}
            <div className="flex justify-between items-center mb-4 text-white">
              <label className="text-sm">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-sm text-blue-200 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-green-500 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center text-white mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-300 hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full h-[300px] md:h-auto">
          <img
            src={Dishon_login}
            alt="Signup Visual"
            loading="lazy"
            className="w-full h-full object-cover contrast-125 opacity-90"
          />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Signup;
