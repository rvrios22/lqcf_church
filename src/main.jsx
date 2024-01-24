import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";

import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import Loader from "./components/loader/Loader";

const Home = lazy(() => import("./pages/home/Home"));
const Giving = lazy(() => import("./pages/giving/Giving"));
const Events = lazy(() => import(  "./pages/events/Events"))
const Prayer = lazy(() => import(  "./pages/prayer/Prayer"))
const LQCFSchool = lazy(() => import(  "./pages/lqcfSchool/LQCFSchool"))
const IdentityYouth = lazy(() => import(  "./pages/identityYouth/IdentityYouth"))
const MensStudy = lazy(() => import(  "./pages/mensStudy/MensStudy"))
const WomensStudy = lazy(() => import(  "./pages/womensStudy/WomensStudy"))
const PrayerChain = lazy(() => import(  "./pages/prayerChain/PrayerChain"))
const Missionary = lazy(() => import(  "./pages/missionary/Missionary"))
const Elders = lazy(() => import(  "./pages/elders/Elders"))
const WhatWeBelieve = lazy(() => import(  "./pages/whatWeBelieve/WhatWeBelieve"))
const Login = lazy(() => import(  "./pages/login/Login"))
const Studying = lazy(() => import(  "./pages/studying/Studying"))

const router = createHashRouter([
  {
    path: "/",
    element: (
        <Root />
    ),
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
