import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="h-[100vh] w-[100%] m-auto">
        <div className="fixed w-full">
          <Header />
        </div>

        <div className="pt-24">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
