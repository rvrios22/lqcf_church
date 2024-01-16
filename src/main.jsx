import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "./App.css";

import ErrorPage from "./pages/ErrorPage";

import Home from "./pages/home/Home";
import Giving from "./pages/giving/Giving";
import Events from "./pages/events/Events";
import Prayer from "./pages/prayer/Prayer";
import LQCFSchool from "./pages/lqcfSchool/LQCFSchool";
import IdentityYouth from "./pages/identityYouth/IdentityYouth";
import MensStudy from "./pages/mensStudy/MensStudy";
import WomensStudy from "./pages/womensStudy/WomensStudy";
import PrayerChain from "./pages/prayerChain/PrayerChain";
import Missionary from "./pages/missionary/Missionary";
import Elders from "./pages/elders/Elders";
import WhatWeBelieve from "./pages/whatWeBelieve/WhatWeBelieve";
import Login from "./pages/login/Login";
import Studying from "./pages/studying/Studying";
import Root from "./pages/Root";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
        path: "/study",
        element: <Studying />,
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
