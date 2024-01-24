import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Loader from "../components/loader/Loader";

export default function Root() {
  return (
    <div className="app-wrapper">
      <div>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
