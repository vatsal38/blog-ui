import Navbar from "@components/common/Layout/NavBar";
import SidePanel from "@components/common/Layout/SidePanel";
import React, { Fragment, ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <Fragment>
      <div className="flex">
        <SidePanel
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Navbar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      </div>
      <div className="pl-6 sm:pl-28 pt-24 max-w-[1600px] mx-auto">
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
