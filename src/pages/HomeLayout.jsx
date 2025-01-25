import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <main>
      <Header />
      <Navbar></Navbar>
      <section className="mx-auto max-w-6xl p-20">
        <Outlet />
      </section>
    </main>
  );
};

export default HomeLayout;
