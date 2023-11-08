import AllStateContext from "@/context/AllStateContext";
import { useState } from "react";

const AllStateProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const value = { sideBarOpen, setSideBarOpen };

  return (
    <AllStateContext.Provider value={value}>
      {children}
    </AllStateContext.Provider>
  );
};

export default AllStateProvider;
