import SettingsSidebar from "@/components/Settings/SettingsSidebar/SettingsSidebar";
import RootNavbar from "@/components/Shared/RootNavbar/RootNavbar";
import React from "react";

const settingLayout = ({ children }) => {
  return (
    <div>
      <RootNavbar />
      <section className="min-h-screen px-2 py-6 pb-16 md:px-4 md:py-10 gird place-items-center">
        <div className="dark:bg-transparent bg-white md:dark:bg-dark-400 text-white max-w-7xl min-h-[700px] relative flex flex-col md:flex-row mx-auto">
          <SettingsSidebar />
          <div className="w-full p-4 md:p-8">{children}</div>
        </div>
      </section>
    </div>
  );
};

export default settingLayout;
