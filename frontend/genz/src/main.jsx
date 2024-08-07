import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/Dashboard/Home.jsx";
import Notification from "./components/Dashboard/Notification.jsx";
import Challenges from "./components/Dashboard/Challenges.jsx";
import Learning from "./components/Dashboard/Learning.jsx";
import Genz from "./components/Dashboard/Genz.jsx";
import Community from "./components/Dashboard/Community.jsx";
import Reedem from "./components/Dashboard/Reedem.jsx";
import Settings from "./components/Dashboard/Settings.jsx";
import Help from "./components/Dashboard/Help.jsx";
import "./index.css";
import HomePage from "./components/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/Dashboard/SignUp.jsx";
import Login from "./components/Dashboard/Login";
import { UserContextProvider } from "./context/UserContext.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "/dashboard/home",
        element: <Home />,
        index: true,
      },
      {
        path: "/dashboard/challenges/",
        element: <Challenges />,
        index: true,
      },
      {
        path: "/dashboard/notification/",
        element: <Notification />,
        index: true,
      },
      {
        path: "/dashboard/learning/",
        element: <Learning />,
        index: true,
      },
      
      {
        path: "/dashboard/Community/",
        element: <Community />,
        index: true,
      },
      {
        path: "/dashboard/reedem/",
        element: <Reedem />,
        index: true,
      },
     
      {
        path: "/dashboard/help/",
        element: <Help />,
        index: true,
      },
    ],
  },
  // {
  //   path: "/notification",
  //   element: <Notification />,
  // },
  // {
  //   path: "/challenges",
  //   element: <Challenges />,
  // },
  // {
  //   path: "/learning",
  //   element: <Learning />,
  // },
  // {
  //   path: "/genz",
  //   element: <Genz />,
  // },
  // {
  //   path: "/community",
  //   element: <Community />,
  // },
  // {
  //   path: "/reedem",
  //   element: <Reedem />,
  // },
  // {
  //   path: "/settings",
  //   element: <Settings />,
  // },
  // {
  //   path: "/help",
  //   element: <Help />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
