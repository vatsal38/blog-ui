import Loader from "@components/common/Loader";
import { truncateDescription } from "@utils/constants";
import moment from "moment";
import React, { Fragment } from "react";
import { FaRegUserCircle } from "react-icons/fa";
interface IProps {
  otherBlogs: any;
  isBlogsLoading: boolean;
}

function OtherBlogs(props: IProps) {
  const { otherBlogs, isBlogsLoading } = props;

  return (
    <Fragment>
      <div className="px-2">
        <span className="text-white text-xl font-semibold bg-blue-950 px-4 py-1 rounded-md">
          Other Blogs
        </span>
        {!isBlogsLoading ? (
          <div className="flex flex-col gap-4 w-full py-8">
            {otherBlogs?.map((item: any, index: number) => (
              <Fragment key={index}>
                <div className="flex flex-col lg:flex-row gap-4 w-full">
                  <div className="md:w-[400px] md:h-[200px]">
                    <img
                      src={item.image}
                      alt="qwe"
                      className="h-full w-full rounded-lg"
                    />
                  </div>
                  <div className="w-full">
                    <div className="font-semibold text-blue-950 text-xl py-2">
                      {item.title}
                    </div>
                    <div className="px-2">
                      {truncateDescription(item.description, 90)}
                    </div>
                    <div className="flex gap-4 py-4">
                      <div className="flex h-[50px] w-[50px] rounded-lg overflow-hidden justify-center items-center">
                        <FaRegUserCircle className="text-blue-950 text-7xl" />
                      </div>
                      <div>
                        <div className="font-semibold text-blue-950">
                          {`${item?.user?.firstName} ${item?.user?.lastName}`}
                        </div>
                        <div className="w-44">
                          {moment(item.createdAt).format("DD, MMMM YYYY")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {index + 1 !== otherBlogs.length && <hr />}
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="w-full h-[60vh] flex justify-center items-center rounded-md bg-blue-50 py-2 my-6">
            <div className="flex flex-col items-center gap-4">
              <Loader color="#172554" type="spin" height={50} width={50} />
              <p className="text-[15px] font-semibold text-red-600">
                It cant take more than minute due to free server.
              </p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default OtherBlogs;
