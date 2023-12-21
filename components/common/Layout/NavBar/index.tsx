import React, { Fragment, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import AuthServices from "@services/AuthServices";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    AuthServices.logOut();
    router.push("/login");
  };

  return (
    <div className="sticky top-0 h-20 shadow-lg w-full pl-28 flex items-center justify-between">
      <div className="text-3xl tracking-wide font-bold text-blue-950">
        Explore the Blogs with US
      </div>
      <div
        className="flex h-[50px] mr-3 w-[50px] rounded-lg overflow-hidden justify-center items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaRegUserCircle className="text-blue-950 text-4xl" />
      </div>
      {isOpen && (
        <Fragment>
          <div className="absolute z-10 w-0 h-0 top-[58px] right-[25px] border-b-blue-950 border-l-[10px] border-l-transparent border-b-[15px] border-r-[10px] border-r-transparent " />
          <div className="absolute top-[71px] right-4 bg-blue-50 rounded-lg px-2 py-3 shadow-lg border-solid border-2 border-blue-950">
            <div className="space-y-1">
              <div className="flex gap-3 items-center hover:bg-blue-950 hover:text-white px-5 py-2 rounded-lg cursor-pointer font-semibold">
                <FaRegUserCircle className="text-xl" />
                <span>Profile</span>
              </div>
              <div
                className="flex gap-3 items-center hover:bg-blue-950 hover:text-white px-5 py-2 rounded-lg cursor-pointer font-semibold"
                onClick={handleLogOut}
              >
                <IoMdLogOut className="text-xl" />
                <span>Log Out</span>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default Navbar;
