import React, { Fragment } from "react";
import Loader from "@components/common/Loader";
import { truncateDescription } from "@utils/constants";
import moment from "moment";
import { FaRegUserCircle } from "react-icons/fa";
import NoBlog from "@components/NoBlog";
interface PTypes {
  mainBlog: any;
  rightSideBlogs: any;
  isBlogsLoading: boolean;
}
function NewAddedBlog(props: PTypes) {
  const { mainBlog, rightSideBlogs, isBlogsLoading } = props;

  return (
    <Fragment>
      <div className="px-2">
        <span className="text-white text-xl font-semibold bg-blue-950 px-4 py-1 rounded-md">
          New Added Blogs
        </span>

        <div className="flex gap-4 w-full py-4">
          {!isBlogsLoading ? (
            <div className="w-full">
              <div className="w-full h-[500px]">
                <img
                  src={mainBlog?.[0]?.image}
                  alt="qwe"
                  className="w-full h-full"
                />
              </div>
              <div className="text-blue-950 font-semibold text-2xl py-4 px-2">
                {mainBlog?.[0]?.title}
              </div>
              <div className="px-2">
                {truncateDescription(mainBlog?.[0]?.description, 90)}
              </div>
              <div className="flex gap-4 py-4">
                <div className="flex h-[50px] w-[50px] rounded-lg overflow-hidden justify-center items-center">
                  <FaRegUserCircle className="text-blue-950 text-7xl" />
                </div>
                <div>
                  <div className="font-semibold text-blue-950">
                    {`${mainBlog?.[0]?.user?.firstName} ${mainBlog?.[0]?.user?.lastName}`}
                  </div>
                  <div>
                    {moment(mainBlog?.[0]?.createdAt).format("DD, MMMM YYYY")}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-[60vh] flex justify-center items-center rounded-md bg-blue-50">
              <Loader color="#172554" type="spin" height={50} width={50} />
            </div>
          )}
          {!isBlogsLoading ? (
            <div className="space-y-3 px-4">
              {rightSideBlogs?.map((item: any, index: number) => (
                <div className="flex gap-4 w-full" key={index}>
                  <div className="w-[200px] h-32">
                    <img
                      src={item.image}
                      alt="qwe"
                      className="h-full w-full rounded-lg"
                    />
                  </div>
                  <div className="w-[300px]">
                    <div className="font-semibold text-blue-950">
                      {item.title}
                    </div>
                    <div className="px-2">
                      {truncateDescription(item.description, 20)}
                    </div>
                    <div className="text-right w-full">
                      By{" "}
                      <span className="text-blue-950 font-bold">
                        {`${item?.user?.firstName} ${item?.user?.lastName}`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-[800px] h-[60vh] flex justify-center items-center rounded-md bg-blue-50">
              <Loader color="#172554" type="spin" height={50} width={50} />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default NewAddedBlog;
