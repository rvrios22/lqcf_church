import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "./App.css";

import ErrorPage from "./pages/ErrorPage";

import Home from "./pages/Home";
import Giving from "./pages/Giving";
import Events from "./pages/Events";
import Prayer from "./pages/Prayer";
import LQCFSchool from "./pages/LQCFSchool";
import IdentityYouth from "./pages/IdentityYouth";
import MensStudy from "./pages/MensStudy";
import WomensStudy from "./pages/WomensStudy";
import PrayerChain from "./pages/PrayerChain";
import Missionary from "./pages/Missionary";
import Elders from "./pages/Elders";
import WhatWeBelieve from "./pages/WhatWeBelieve";
import Login from "./pages/Login";
import NavbarFooterWrapper from "./components/NavbarFooterWrapper/NavbarFooterWrapper";

const router = createHashRouter([
  {
    path: "/",
    element: <NavbarFooterWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/giving",
        element: <Giving />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/prayer",
        element: <Prayer />,
      },
      {
        path: "/lqcf-school",
        element: <LQCFSchool />,
      },
      {
        path: "/identity-youth",
        element: <IdentityYouth />,
      },
      {
        path: "/mens-study",
        element: <MensStudy />,
      },
      {
        path: "/womens-study",
        element: <WomensStudy />,
      },
      {
        path: "/prayer-chain",
        element: <PrayerChain />,
      },
      {
        path: "/missionary",
        element: <Missionary />,
      },
      {
        path: "/pastors",
        element: <Elders />,
      },
      {
        path: "/what-we-believe",
        element: <WhatWeBelieve />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
