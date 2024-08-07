// // import React from "react";
// // import { useState } from "react";
// // import axios from "axios";
// // import { USER_API_END_POINT } from "../utils/contants";

// // const Login = () => {
// //   const [input, setInput] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });
// //   const changeEventHandler = (e) => {
// //     setInput({
// //       ...input,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const submitHandler = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post(`${USER_API_END_POINT}/login`, input);
// //       if (res.data.success) {
// //         alert(`${res.data.message}`);
// //       }
// //     } catch (error) {
// //       alert(`${error.response.data.message}`);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div>
// //         <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
// //           <div className="ml-10 sm:w-full sm:max-w-sm">
// //             <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
// //               Login
// //             </h2>
// //           </div>

// //           <div className="mt-10 ml-10 sm:w-full sm:max-w-sm">
// //             <form onSubmit={submitHandler} method="POST" className="space-y-6">
// //               <div>
// //                 <label
// //                   htmlFor="email"
// //                   className="block text-sm font-medium leading-6 text-gray-900"
// //                 >
// //                   Email address
// //                 </label>
// //                 <div className="mt-2">
// //                   <input
// //                     id="email"
// //                     name="email"
// //                     type="email"
// //                     value={input.email}
// //                     onChange={changeEventHandler}
// //                     required
// //                     autoComplete="email"
// //                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <div className="flex items-center justify-between">
// //                   <label
// //                     htmlFor="password"
// //                     className="block text-sm font-medium leading-6 text-gray-900"
// //                   >
// //                     Password
// //                   </label>
// //                   <div className="text-sm">
// //                     <a
// //                       href="#"
// //                       className="font-semibold text-indigo-600 hover:text-indigo-500"
// //                     >
// //                       Forgot password?
// //                     </a>
// //                   </div>
// //                 </div>
// //                 <div className="mt-2">
// //                   <input
// //                     id="password"
// //                     name="password"
// //                     type="password"
// //                     value={input.password}
// //                     onChange={changeEventHandler}
// //                     required
// //                     autoComplete="current-password"
// //                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <button
// //                   type="submit"
// //                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //                 >
// //                   Login
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

import React from "react";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/contants";
import login from "../../assets/login.jpg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input);
      if (res.data.success) {
        // alert(`${res.data.message}`);

        window.localStorage.setItem("auth", JSON.stringify(res.data.user));
        navigate("/dashboard/home");
      }
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <div className="flex flex-col w-3/4 overflow-hidden bg-white rounded-lg shadow-lg lg:flex-row">
        <div className="w-full p-8 lg:w-1/2">
          <div className="max-w-sm">
            <h2 className="mt-10 text-3xl font-bold leading-9 tracking-tight text-center text-gray-900">
              Login
            </h2>
          </div>

          <div className="mt-10 sm:w-full sm:max-w-sm">
            <form onSubmit={submitHandler} method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={input.email}
                    onChange={changeEventHandler}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={changeEventHandler}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={login}
            alt="Login image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
