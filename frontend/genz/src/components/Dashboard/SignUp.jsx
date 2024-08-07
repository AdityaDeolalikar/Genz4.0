// // import React from "react";
// // import { useState } from "react";
// // import { USER_API_END_POINT } from "../utils/contants";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import signup from "../assets/signup.png";
// // const SignUp = () => {
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
// //       const res = await axios.post(`${USER_API_END_POINT}/register`, input);
// //       if (res.data.success) {
// //         alert(`${res.data.message}`);
// //       }
// //     } catch (error) {
// //       alert(`${error.response.data.message}`);
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="h-screen">
// //         <div className="flex flex-col min-h-full px-6 py-12 lg:px-8">
// //           <div className="max-w-sm">
// //             <h2 className="mt-10 ml-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
// //               Sign Up
// //             </h2>
// //           </div>

// //           <div className="w-1/4 mt-10 ml-10">
// //             <form onSubmit={submitHandler} className="space-y-6">
// //               <div>
// //                 <label
// //                   htmlFor="email"
// //                   className="block text-sm font-medium leading-6 text-gray-900"
// //                 >
// //                   User Name
// //                 </label>
// //                 <div className="mt-2">
// //                   <input
// //                     id="name"
// //                     name="name"
// //                     type="name"
// //                     value={input.name}
// //                     onChange={changeEventHandler}
// //                     required
// //                     autoComplete="name"
// //                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                   />
// //                 </div>
// //               </div>
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
// //                   Sign up
// //                 </button>
// //               </div>
// //             </form>
            
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default SignUp;


import React from "react";
import { useState } from "react";
import { USER_API_END_POINT } from "../../utils/contants";
import axios from "axios";
import { toast } from "react-toastify";
import signup from '../../assets/signup.png'
const SignUp = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, input);
      if (res.data.success) {
        alert(`${res.data.message}`);
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
              Sign Up
            </h2>
          </div>

          <div className="mt-10 sm:w-full sm:max-w-sm">
            <form onSubmit={submitHandler} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={input.name}
                    onChange={changeEventHandler}
                    required
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
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
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={signup}
            alt="Sign up image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
