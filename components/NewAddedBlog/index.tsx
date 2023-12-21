import React, { Fragment } from "react";
import { FaRegUserCircle } from "react-icons/fa";

function NewAddedBlog() {
  // https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  return (
    <Fragment>
      <div className="px-2">
        <span className="text-white text-xl font-semibold bg-blue-950 px-4 py-1 rounded-md">
          New Added Blogs
        </span>
        <div className="flex gap-4 w-full py-4">
          <div className="w-full">
            <div className="w-full h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="qwe"
                className="w-full h-full"
              />
            </div>
            <div className="text-blue-950 font-semibold text-2xl py-4 px-2">
              Trying and searching and wanting
            </div>
            <div className="px-2">
              I am sitting on my balcony. It is spring and there is a little bit
              of heat in the sun. The balcony looks out over a road. The road is
              usually busy… an endless stream of trucks and cars but right now
              there is no traffic. Everyone is self-isolating. The machine has
              stopped. It feels strange. Peaceful. I can hear different birds…
              the wren, the blackbird, the robin. A blue tit is flitting from
              one branch to the next. Life goes on. I could sit here all day{" "}
              <span className="text-blue-950 font-bold cursor-pointer">
                ...READ MORE
              </span>
            </div>
            <div className="flex gap-4 py-4">
              <div className="flex h-[50px] w-[50px] rounded-lg overflow-hidden justify-center items-center">
                <FaRegUserCircle className="text-blue-950 text-7xl" />
              </div>
              <div>
                <div className="font-semibold text-blue-950">Vatsal Mavani</div>
                <div>20, December 2023</div>
              </div>
            </div>
          </div>
          <div className="space-y-3 px-4">
            {/* data 1 ==============> */}
            <div className="flex gap-4 w-full">
              <div className="w-[200px] h-32">
                <img
                  src="https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="qwe"
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div className="w-[300px]">
                <div className="font-semibold text-blue-950">
                  Trying and searching and wanting
                </div>
                <div className="px-2">
                  I am sitting on my balcony. It is spring and there is athe ver
                  a road. The roale r
                  <span className="text-blue-950 font-bold cursor-pointer">
                    ...READ MORE
                  </span>
                </div>
                <div className="text-right w-full">
                  By{" "}
                  <span className="text-blue-950 font-bold">Vatsal Mavani</span>
                </div>
              </div>
            </div>
            {/* data 2 ==============> */}
            <div className="flex gap-4 w-full">
              <div className="w-[200px] h-32">
                <img
                  src="https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="qwe"
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div className="w-[300px]">
                <div className="font-semibold text-blue-950">
                  Trying and searching and wanting
                </div>
                <div className="px-2">
                  I am sitting on my balcony. It is spring and there is athe ver
                  a road. The roale r
                  <span className="text-blue-950 font-bold cursor-pointer">
                    ...READ MORE
                  </span>
                </div>
                <div className="text-right w-full">
                  By{" "}
                  <span className="text-blue-950 font-bold">Vatsal Mavani</span>
                </div>
              </div>
            </div>
            {/* data 3 ==============> */}
            <div className="flex gap-4 w-full">
              <div className="w-[200px] h-32">
                <img
                  src="https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="qwe"
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div className="w-[300px]">
                <div className="font-semibold text-blue-950">
                  Trying and searching and wanting
                </div>
                <div className="px-2">
                  I am sitting on my balcony. It is spring and there is athe ver
                  a road. The roale r
                  <span className="text-blue-950 font-bold cursor-pointer">
                    ...READ MORE
                  </span>
                </div>
                <div className="text-right w-full">
                  By{" "}
                  <span className="text-blue-950 font-bold">Vatsal Mavani</span>
                </div>
              </div>
            </div>
            {/* data 4 ==============> */}
            <div className="flex gap-4 w-full">
              <div className="w-[200px] h-32">
                <img
                  src="https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="qwe"
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div className="w-[300px]">
                <div className="font-semibold text-blue-950">
                  Trying and searching and wanting
                </div>
                <div className="px-2">
                  I am sitting on my balcony. It is spring and there is athe ver
                  a road. The roale r
                  <span className="text-blue-950 font-bold cursor-pointer">
                    ...READ MORE
                  </span>
                </div>
                <div className="text-right w-full">
                  By{" "}
                  <span className="text-blue-950 font-bold">Vatsal Mavani</span>
                </div>
              </div>
            </div>
            {/* data 5 ==============> */}
            <div className="flex gap-4 w-full">
              <div className="w-[200px] h-32">
                <img
                  src="https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="qwe"
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div className="w-[300px]">
                <div className="font-semibold text-blue-950">
                  Trying and searching and wanting
                </div>
                <div className="px-2">
                  I am sitting on my balcony. It is spring and there is athe ver
                  a road. The roale r
                  <span className="text-blue-950 font-bold cursor-pointer">
                    ...READ MORE
                  </span>
                </div>
                <div className="text-right w-full">
                  By{" "}
                  <span className="text-blue-950 font-bold">Vatsal Mavani</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NewAddedBlog;
