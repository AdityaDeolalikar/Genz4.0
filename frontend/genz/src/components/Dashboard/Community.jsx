// import React from "react";
// import SideBar from "../SideBar";
// import DashboardNavbar from "./DashboardNavbar";
// import CommunityCard from "./CommunityCard";
// import { CiSearch } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";

// const Community = () => {
//   const currentPage = "community";
//   return (
//     <div>
//       <div className="flex">
//         <div>
//           <SideBar activePage={currentPage} />
//         </div>
//         <div className="w-full ">
//           <DashboardNavbar />
//           <div className="p-5">
//             <div className="relative flex items-center justify-between ml-10">
//               <span className="absolute left-3">
//                 <CiSearch size={20} className="text-gray-500" />
//               </span>
//               <input
//                 className="w-1/4 py-1 pl-10 pr-3 text-lg border-2 border-solid rounded border-slate-400"
//                 type="text"
//                 placeholder="Search community"
//               />
//               <div>
//                 <button className="flex items-center justify-center gap-3 ">
//                   <div className="flex items-center justify-center gap-3 p-2 font-semibold text-black border-2 border-black border-solid rounded hover:text-white hover:bg-black">
//                     Add Community <FaPlus />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex-col h-auto mt-5 ml-16">
//             <div className="flex gap-6">
//               <CommunityCard heading={"ML"} color={"#67e8f9"} />
//               <CommunityCard heading={"AI"} color={"#e879f9"} />
//               <CommunityCard heading={"Ethical Hacking"} color={"#fb7185"} />
//               <CommunityCard heading={"E-Sports"} color={"#4ade80"} />
//             </div>
//               <h1 className="mt-10 mb-5 text-lg font-semibold underline">Suggested</h1>
//             <div className="flex gap-6">
//               <CommunityCard heading={"Food Stylist"} color={"#bef264"} />
//               <CommunityCard heading={"Urban Farmer"} color={"#fed7aa"} />
//               <CommunityCard heading={"Fashion Designer"} color={"#78716c"} />
//               <CommunityCard heading={"Wine Expert"} color={"#9ca3af"} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Community;


// import React, { useState } from "react";
// import SideBar from "../SideBar";
// import DashboardNavbar from "./DashboardNavbar";
// import CommunityCard from "./CommunityCard";
// import { CiSearch } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";
// import PopupForm from "./PopupForm";

// const Community = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [communities, setCommunities] = useState([
//     { heading: "ML", color: "#67e8f9" },
//     { heading: "AI", color: "#e879f9" },
//     { heading: "Ethical Hacking", color: "#fb7185" },
//     { heading: "E-Sports", color: "#4ade80" },
//   ]);
  
//   const currentPage = "community";

//   const handleAddCommunity = (community) => {
//     setCommunities([...communities, community]);
//   };

//   return (
//     <div>
//       <div className="flex">
//         <div>
//           <SideBar activePage={currentPage} />
//         </div>
//         <div className="w-full ">
//           <DashboardNavbar />
//           <div className="p-5">
//             <div className="relative flex items-center justify-between ml-10">
//               <span className="absolute left-3">
//                 <CiSearch size={20} className="text-gray-500" />
//               </span>
//               <input
//                 className="w-1/4 py-1 pl-10 pr-3 text-lg border-2 border-solid rounded border-slate-400"
//                 type="text"
//                 placeholder="Search community"
//               />
//               <div>
//                 <button
//                   className="flex items-center justify-center gap-3 "
//                   onClick={() => setIsPopupOpen(true)}
//                 >
//                   <div className="flex items-center justify-center gap-3 p-2 font-semibold text-black border-2 border-black border-solid rounded hover:text-white hover:bg-black">
//                     Add Community <FaPlus />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex-col h-auto mt-5 ml-16">
//             <div className="flex gap-6">
//               {communities.map((community, index) => (
//                 <CommunityCard
//                   key={index}
//                   heading={community.heading}
//                   color={community.color}
//                 />
//               ))}
//             </div>
//             <h1 className="mt-10 mb-5 text-lg font-semibold underline">Suggested</h1>
//             <div className="flex gap-6">
//               <CommunityCard heading={"Food Stylist"} color={"#bef264"} showJoinButton/>
//               <CommunityCard heading={"Urban Farmer"} color={"#fed7aa"} showJoinButton/>
//               <CommunityCard heading={"Fashion Designer"} color={"#78716c"} showJoinButton/>
//               <CommunityCard heading={"Wine Expert"} color={"#9ca3af"} showJoinButton/>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isPopupOpen && (
//         <PopupForm
//           onClose={() => setIsPopupOpen(false)}
//           onAddCommunity={handleAddCommunity}
//         />
//       )}
//     </div>
//   );
// };

// export default Community;


// import React, { useState } from "react";
// import SideBar from "../SideBar";
// import DashboardNavbar from "./DashboardNavbar";
// import CommunityCard from "./CommunityCard";
// import { CiSearch } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";
// import PopupForm from "./PopupForm";

// const Community = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [communities, setCommunities] = useState([
//     { heading: "ML", color: "#67e8f9" },
//     { heading: "AI", color: "#e879f9" },
//     { heading: "Ethical Hacking", color: "#fb7185" },
//     { heading: "E-Sports", color: "#4ade80" },
//   ]);
//   const [suggestedCommunities, setSuggestedCommunities] = useState([
//     { heading: "Food Stylist", color: "#bef264" },
//     { heading: "Urban Farmer", color: "#fed7aa" },
//     { heading: "Fashion Designer", color: "#78716c" },
//     { heading: "Wine Expert", color: "#9ca3af" },
//   ]);

//   const currentPage = "community";

//   const handleAddCommunity = (community) => {
//     setCommunities([...communities, community]);
//   };

//   const handleJoinCommunity = (community) => {
//     setCommunities([...communities, community]);
//     setSuggestedCommunities(
//       suggestedCommunities.filter((c) => c.heading !== community.heading)
//     );
//   };

//   return (
//     <div>
//       <div className="flex">
//         <div>
//           <SideBar activePage={currentPage} />
//         </div>
//         <div className="w-full ">
//           <DashboardNavbar />
//           <div className="p-5">
//             <div className="relative flex items-center justify-between ml-10">
//               <span className="absolute left-3">
//                 <CiSearch size={20} className="text-gray-500" />
//               </span>
//               <input
//                 className="w-1/4 py-1 pl-10 pr-3 text-lg border-2 border-solid rounded border-slate-400"
//                 type="text"
//                 placeholder="Search community"
//               />
//               <div>
//                 <button
//                   className="flex items-center justify-center gap-3 "
//                   onClick={() => setIsPopupOpen(true)}
//                 >
//                   <div className="flex items-center justify-center gap-3 p-2 font-semibold text-black border-2 border-black border-solid rounded hover:text-white hover:bg-black">
//                     Add Community <FaPlus />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex-col h-auto mt-5 ml-16">
//             <div className="flex gap-6">
//               {communities.map((community, index) => (
//                 <CommunityCard
//                   key={index}
//                   heading={community.heading}
//                   color={community.color}
//                 />
//               ))}
//             </div>
//             <h1 className="mt-10 mb-5 text-lg font-semibold underline">Suggested</h1>
//             <div className="flex gap-6">
//               {suggestedCommunities.map((community, index) => (
//                 <CommunityCard
//                   key={index}
//                   heading={community.heading}
//                   color={community.color}
//                   showJoinButton
//                   onJoin={() => handleJoinCommunity(community)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isPopupOpen && (
//         <PopupForm
//           onClose={() => setIsPopupOpen(false)}
//           onAddCommunity={handleAddCommunity}
//         />
//       )}
//     </div>
//   );
// };

// export default Community;



// import React, { useState } from "react";
// import SideBar from "../SideBar";
// import DashboardNavbar from "./DashboardNavbar";
// import { CiSearch } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";

// const Community = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [activeCommunity, setActiveCommunity] = useState(null);
//   const [communities, setCommunities] = useState([
//     { heading: "ML", color: "#78716c" },
//     { heading: "AI", color: "#f87171" },
//     { heading: "Ethical Hacking", color: "#fbbf24" },
//     { heading: "E-Sports", color: "#a3e635" },
//   ]);
//   const [suggestedCommunities, setSuggestedCommunities] = useState([
//     { heading: "Food Stylist", color: "#4ade80" },
//     { heading: "Urban Farmer", color: "#2dd4bf" },
//     { heading: "Fashion Designer", color: "#38bdf8" },
//     { heading: "Wine Expert", color: "#818cf8" },
//   ]);

//   const currentPage = "community";

//   const handleAddCommunity = (community) => {
//     setCommunities([...communities, community]);
//   };

//   const handleJoinCommunity = (community) => {
//     setCommunities([...communities, community]);
//     setSuggestedCommunities(
//       suggestedCommunities.filter((c) => c.heading !== community.heading)
//     );
//   };

//   const handleCardClick = (community) => {
//     setActiveCommunity(community);
//   };

//   return (
//     <div>
//       <div className="flex">
//         <div>
//           <SideBar activePage={currentPage} />
//         </div>
//         <div className="w-full">
//           <DashboardNavbar />
//           <div className="p-5">
//             <div className="relative flex items-center justify-between ml-10">
//               <span className="absolute left-3">
//                 <CiSearch size={20} className="text-gray-500" />
//               </span>
//               <input
//                 className="w-1/4 py-1 pl-10 pr-3 text-lg border-2 border-solid rounded border-slate-400"
//                 type="text"
//                 placeholder="Search community"
//               />
//               <div>
//                 <button
//                   className="flex items-center justify-center gap-3"
//                   onClick={() => setIsPopupOpen(true)}
//                 >
//                   <div className="flex items-center justify-center gap-3 p-2 font-semibold text-black border-2 border-black border-solid rounded hover:text-white hover:bg-black">
//                     Add Community <FaPlus />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex-col h-auto mt-5 ml-16">
//             <div className="flex gap-6">
//               {communities.map((community, index) => (
//                 <CommunityCard
//                   key={index}
//                   heading={community.heading}
//                   color={community.color}
//                   onClick={() => handleCardClick(community)}
//                 />
//               ))}
//             </div>
//             <h1 className="mt-10 mb-5 text-lg font-semibold underline">Suggested</h1>
//             <div className="flex gap-6">
//               {suggestedCommunities.map((community, index) => (
//                 <CommunityCard
//                   key={index}
//                   heading={community.heading}
//                   color={community.color}
//                   showJoinButton
//                   onJoin={() => handleJoinCommunity(community)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isPopupOpen && (
//         <PopupForm
//           onClose={() => setIsPopupOpen(false)}
//           onAddCommunity={handleAddCommunity}
//         />
//       )}
//       {activeCommunity && (
//         <ChatPopup
//           community={activeCommunity}
//           onClose={() => setActiveCommunity(null)}
//         />
//       )}
//     </div>
//   );
// };

// const CommunityCard = ({ heading, color, showJoinButton, onJoin, onClick }) => {
//   return (
//     <div
//       className="items-center justify-center w-48 h-48 p-5 border cursor-pointer rounded-xl"
//       style={{ backgroundColor: color }}
//       onClick={onClick}
//     >
//       <h3 className="items-center justify-center mx-auto text-lg font-bold">{heading}</h3>
//       {showJoinButton && (
//         <button
//           className="flex items-center justify-center px-4 py-2 mx-auto mt-20 text-white bg-gray-800 rounded hover:bg-black"
//           onClick={(e) => {
//             e.stopPropagation();
//             onJoin();
//           }}
//         >
//           Join
//         </button>
//       )}
//     </div>
//   );
// };

// const PopupForm = ({ onClose, onAddCommunity }) => {
//   const [heading, setHeading] = useState("");
//   const [color, setColor] = useState("#ffffff");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddCommunity({ heading, color });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
//       <div className="p-5 bg-white rounded-lg">
//         <h2 className="mb-4 text-2xl font-bold">Add Community</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-1">Community Name</label>
//             <input
//               type="text"
//               className="w-full p-2 border-2 rounded"
//               value={heading}
//               onChange={(e) => setHeading(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1">Color</label>
//             <input
//               type="color"
//               className="w-full p-2 border-2 rounded"
//               value={color}
//               onChange={(e) => setColor(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="px-4 py-2 mr-2 bg-gray-300 rounded"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
//               Add
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const ChatPopup = ({ community, onClose }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
//       <div className="w-1/2 p-5 bg-white rounded-lg">
//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl font-bold">{community.heading} Community</h2>
//           <button onClick={onClose} className="text-xl font-bold">X</button>
//         </div>
//         <div className="mt-4">
//           <input type="text" placeholder="Type a message..." className="w-full p-2" />
//           {/* Add chat UI components here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Community;



import React, { useState } from "react";
import SideBar from "../SideBar";
import DashboardNavbar from "./DashboardNavbar";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const Community = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeCommunity, setActiveCommunity] = useState(null);
  const [communities, setCommunities] = useState([
    { heading: "ML", color: "#a3a3a3" },
    { heading: "AI", color: "#f87171" },
    { heading: "Ethical Hacking", color: "#fb923c" },
    { heading: "E-Sports", color: "#facc15" },
  ]);
  const [suggestedCommunities, setSuggestedCommunities] = useState([
    { heading: "Food Stylist", color: "#a3e635" },
    { heading: "Urban Farmer", color: "#4ade80" },
    { heading: "Fashion Designer", color: "#22d3ee" },
    { heading: "Wine Expert", color: "#60a5fa" },
  ]);

  const currentPage = "community";

  const handleAddCommunity = (community) => {
    setCommunities([...communities, community]);
  };

  const handleJoinCommunity = (community) => {
    setCommunities([...communities, community]);
    setSuggestedCommunities(
      suggestedCommunities.filter((c) => c.heading !== community.heading)
    );
  };

  const handleCardClick = (community) => {
    setActiveCommunity(community);
  };

  return (
    <div>
      <div className="flex">
        <div>
          <SideBar activePage={currentPage} />
        </div>
        <div className="w-full">
          <DashboardNavbar />
          <div className="p-5">
            <div className="relative flex items-center justify-between ml-10">
              <span className="absolute left-3">
                <CiSearch size={20} className="text-gray-500" />
              </span>
              <input
                className="w-1/4 py-1 pl-10 pr-3 text-lg border-2 border-solid rounded border-slate-400"
                type="text"
                placeholder="Search community"
              />
              <div>
                <button
                  className="flex items-center justify-center gap-3"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <div className="flex items-center justify-center gap-3 p-2 font-semibold text-black border-2 border-black border-solid rounded hover:text-white hover:bg-black">
                    Add Community <FaPlus />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-col h-auto mt-5 ml-16">
            <div className="flex gap-6">
              {communities.map((community, index) => (
                <CommunityCard
                  key={index}
                  heading={community.heading}
                  color={community.color}
                  onClick={() => handleCardClick(community)}
                />
              ))}
            </div>
            <h1 className="mt-10 mb-5 text-lg font-semibold underline">Suggested</h1>
            <div className="flex gap-6">
              {suggestedCommunities.map((community, index) => (
                <CommunityCard
                  key={index}
                  heading={community.heading}
                  color={community.color}
                  showJoinButton
                  onJoin={() => handleJoinCommunity(community)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <PopupForm
          onClose={() => setIsPopupOpen(false)}
          onAddCommunity={handleAddCommunity}
        />
      )}
      {activeCommunity && (
        <ChatPopup
          community={activeCommunity}
          onClose={() => setActiveCommunity(null)}
        />
      )}
    </div>
  );
};

const CommunityCard = ({ heading, color, showJoinButton, onJoin, onClick }) => {
  return (
    <div
      className="flex-col items-center justify-center w-48 h-48 p-4 border cursor-pointer rounded-xl hover:scale-105 hover:shadow-xl"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <h3 className="text-lg font-bold">{heading}</h3>
      {showJoinButton && (
        <button
          className="items-center px-4 py-2 mx-auto mt-2 text-white bg-gray-900 rounded-lg hover:bg-blue-900 "
          onClick={(e) => {
            e.stopPropagation();
            onJoin();
          }}
        >
          Join
        </button>
      )}
    </div>
  );
};

const PopupForm = ({ onClose, onAddCommunity }) => {
  const [heading, setHeading] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCommunity({ heading, color });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="p-5 bg-white rounded-lg">
        <h2 className="mb-4 text-2xl font-bold">Add Community</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Community Name</label>
            <input
              type="text"
              className="w-full p-2 border-2 rounded"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Color</label>
            <input
              type="color"
              className="w-full p-2 border-2 rounded"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 mr-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ChatPopup = ({ community, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-3/4 p-5 bg-white rounded-lg h-3/4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{community.heading} Community</h2>
          <button onClick={onClose} className="text-xl font-bold">X</button>
        </div>
        <div className="mt-4 overflow-auto ">
         <input type="text" placeholder="Type a message" className="flex-1 w-2/3 p-2 rounded-lg mt-96" />
         <button className="p-2 ml-4 text-white bg-gray-700 rounded">Send</button>
          {/* Add chat UI components here */}
        </div>
      </div>
    </div>
  );
};

export default Community;
