import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../homeLayout/LeftAside";
import RightAside from "../homeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto grid gap-4 grid-cols-12 ">
        <aside className="col-span-2">
          <LeftAside />
        </aside>
        <section className="col-span-8">
          <Outlet />
        </section>
        <aside className="col-span-2">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
