// import React, { useEffect } from "react";
// import Navbar1 from "./Navbar1";
// import genz from "../assets/genz.png";
// import { FaArrowRight } from "react-icons/fa";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";
// import About from "./About";
// import Feedback from "./Feedback";
// import Footer from "./Footer";
// import ParticlesPage from "./ParticlesPage";

// const HomePage = () => {
//   const bouncy = useRef(null);
//   useEffect(() => {
//     const bouncyElement = bouncy.current;
//     const tl = gsap.timeline({ repeat: 0 });
//     tl.fromTo(
//       bouncyElement,
//       { y: -200, opacity: 0 },
//       { y: 0, opacity: 1, duration: 2, ease: "elastic.out(1, 0.3)" }
//     );
//   }, []);

//   return (
//     <>
//       <div>
//         <Navbar1 />
//         <div className="container flex justify-between h-screen mx-auto mt-3 header">
//           <div className="items-center justify-center mt-40 ">
//             <h6
//               className="inline-block mb-5 text-5xl font-semibold text-transparent bg-gradient-to-r from-blue-800 via-green-500 to-indigo-900 bg-clip-text"
//               ref={bouncy}
//             >
//               Connect, Create, Change the World
//             </h6>
//             <p className="mt-2 font-semibold text-gray-700">
//               Our platform empowers Gen Z to learn and find opportunities in
//               unconventional careers. <br />
//               By leveraging cutting-edge technology and fostering a supportive
//               community, we provide <br />
//               resources, mentorship, and real-world opportunities to help young
//               people explore and <br />
//               succeed in innovative fields.
//             </p>
//             <button className="flex items-center justify-center gap-3 mt-5 ">
//               <div className="flex items-center justify-center gap-3 p-2 font-semibold text-black border-2 border-black border-solid rounded hover:text-white hover:bg-black ">
//                 Explore more
//                 <FaArrowRight />{" "}
//               </div>
//             </button>
//           </div>

//           <div>
//             <img
//               className="w-auto mt-20 mr-16 rounded h-96"
//               src={genz}
//               alt=""
//             />
//           </div>
//         </div>

//         <About />
//         <Feedback />
//         <Footer />
//         {/* <ParticlesPage /> */}
//       </div>
//     </>
//   );
// };

// export default HomePage;

import React, { useEffect, useRef } from "react";
import Navbar1 from "./Navbar1";
import genz from "../assets/genz.png";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import About from "./About";
import Feedback from "./Feedback";
import Footer from "./Footer";
import ParticlesPage from "./ParticlesPage";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const bouncy = useRef(null);

  useEffect(() => {
    const bouncyElement = bouncy.current;
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(
      bouncyElement,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "elastic.out(1, 0.3)" }
    );
  }, []);
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (localStorage.getItem("auth")) {
      navigate("/dashboard/home");
    } else {
      navigate("/login");
    }
  };  

  return (
    <>
      <div className="relative" id="homepage">
        {/* Particles background */}
        <div className="absolute inset-0 z-0">
          <ParticlesPage />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar1 />
          <div className="container flex justify-between h-screen mx-auto mt-3 header">
            <div className="items-center justify-center mt-40">
              <h6
                className="inline-block mb-5 text-5xl font-semibold text-transparent bg-gradient-to-r from-blue-800 via-green-500 to-indigo-900 bg-clip-text"
                ref={bouncy}
              >
                Connect, Create, Change the World
              </h6>
              <p className="mt-2 font-semibold text-gray-700">
                Our platform empowers Gen Z to learn and find opportunities in
                unconventional careers. <br />
                By leveraging cutting-edge technology and fostering a supportive
                community, we provide <br />
                resources, mentorship, and real-world opportunities to help
                young people explore and <br />
                succeed in innovative fields.
              </p>
              <button className="flex items-center justify-center gap-3 mt-5">
                <div
                  className="flex items-center justify-center gap-3 p-2 font-semibold text-black border-2 border-black border-solid rounded hover:text-white hover:bg-black"
                  onClick={handleNavigate}
                >
                  Explore more
                  <FaArrowRight />
                </div>
              </button>
            </div>

            <div>
              <img
                className="w-auto mt-20 mr-16 rounded h-96"
                src={genz}
                alt=""
              />
            </div>
          </div>

          <About />
          <Feedback />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
