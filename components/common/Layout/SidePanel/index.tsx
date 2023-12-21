import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { TbBrandBlogger } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { PiGithubLogo } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";

function SidePanel() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div
      className={`fixed h-screen ${
        isSideBarOpen ? "w-[350px]" : "w-24"
      } p-4 rounded-r-2xl shadow-lg transition-all duration-200 overflow-x-hidden bg-blue-950 overflow-y-auto z-10`}
      onMouseEnter={() => setIsSideBarOpen(true)}
      onMouseLeave={() => setIsSideBarOpen(false)}
    >
      <div className="flex w-[350px] overflow-hidden gap-5 items-center">
        <div className="h-[60px] w-[60px] rounded-lg overflow-hidden">
          <img src="/images/vm-logo.png" alt="logo" className="h-full w-full" />
        </div>
        <div className="text-xl font-bold text-white">WELCOME TO VM BLOG</div>
      </div>
      <hr className="mt-4" />
      <div className="h-[85vh]">
        <div className="pt-8 space-y-2 h-[50%]">
          <div className="flex w-[310px] overflow-hidden gap-5 items-center hover:bg-white hover:bg-opacity-20 hover:rounded-lg cursor-pointer">
            <div className="flex h-[50px] ml-2 w-[50px] rounded-lg overflow-hidden justify-center items-center">
              <RxDashboard className="text-white text-4xl" />
            </div>
            <div className="text-xl font-semibold text-gray-300">Dashboard</div>
          </div>
          <div className="flex w-[310px] overflow-hidden gap-5 items-center hover:bg-white hover:bg-opacity-20 hover:rounded-lg cursor-pointer">
            <div className="flex h-[50px] ml-2 w-[50px] rounded-lg overflow-hidden justify-center items-center">
              <TbBrandBlogger className="text-white text-4xl" />
            </div>
            <div className="text-xl font-semibold text-gray-300">My Blogs</div>
          </div>
          <div className="flex w-[310px] overflow-hidden gap-5 items-center hover:bg-white hover:bg-opacity-20 hover:rounded-lg cursor-pointer">
            <div className="flex h-[50px] ml-2 w-[50px] rounded-lg overflow-hidden justify-center items-center">
              <FaRegUserCircle className="text-white text-4xl" />
            </div>
            <div className="text-xl font-semibold text-gray-300">
              My Profile
            </div>
          </div>
        </div>
        <div className="flex items-end h-[50%]">
          <div className="space-y-4">
            <a href="https://github.com/vatsal38" target="_blank">
              <div className="flex w-[310px] overflow-hidden gap-5 items-center hover:bg-white hover:bg-opacity-20 hover:rounded-lg cursor-pointer my-2">
                <div className="flex h-[50px] ml-2 w-[50px] rounded-lg overflow-hidden justify-center items-center">
                  <PiGithubLogo className="text-white text-4xl" />
                </div>
                <div className="text-xl font-semibold text-gray-300">
                  Github
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/vatsal-mavani/"
              target="_blank"
            >
              <div className="flex w-[310px] overflow-hidden gap-5 items-center hover:bg-white hover:bg-opacity-20 hover:rounded-lg cursor-pointer my-2">
                <div className="flex h-[50px] ml-2 w-[50px] rounded-lg overflow-hidden justify-center items-center">
                  <CiLinkedin className="text-white text-4xl" />
                </div>
                <div className="text-xl font-semibold text-gray-300">
                  LinkedIn
                </div>
              </div>
            </a>
            <a href="https://vatsal-mavani.vercel.app/" target="_blank">
              <div className="flex w-[310px] overflow-hidden gap-5 items-center hover:bg-white hover:bg-opacity-20 hover:rounded-lg cursor-pointer">
                <div className="flex h-[50px] ml-2 w-[50px] rounded-lg overflow-hidden justify-center items-center">
                  <TbWorldWww className="text-white text-4xl" />
                </div>
                <div className="text-xl font-semibold text-gray-300">
                  My Website
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
