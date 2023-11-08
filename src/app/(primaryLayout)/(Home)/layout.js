"use client";
import HomeFooter from "@/components/Shared/Footer/HomeFooter";
import Footer from "@/components/Shared/Footer/HomeFooter";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import AllStateContext from "@/context/AllStateContext";
import { useContext } from "react";

const layout = ({ children }) => {
  const { sideBarOpen } = useContext(AllStateContext);

  return (
    <main className="min-h-screen bg-darkPrimary relative ">
      <Sidebar />
      <section className={`${!sideBarOpen ? "md:ml-20" : "md:ml-[240px]"}`}>
        {children}
      </section>
    </main>
  );
};

export default layout;
