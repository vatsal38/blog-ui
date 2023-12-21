import Navbar from "@components/common/Layout/NavBar";
import SidePanel from "@components/common/Layout/SidePanel";
import React, { Fragment, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      <div className="flex">
        <SidePanel />
        <Navbar />
      </div>
      <div className="pl-28 pt-4">{children}</div>
    </Fragment>
  );
};

export default Layout;