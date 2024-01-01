import Loader from "@components/common/Loader";
import { truncateDescription } from "@utils/constants";
import moment from "moment";
import React, { Fragment } from "react";
import { FaRegUserCircle } from "react-icons/fa";

interface IProps {
  mostPopularBlogs: any;
  isBlogsLoading: boolean;
}

function MostPopular(props: IProps) {
  const { mostPopularBlogs, isBlogsLoading } = props;
  return (
    <Fragment>
      <div className="px-2">
        <span className="text-white text-xl font-semibold bg-blue-950 px-4 py-1 rounded-md">
          Most Popular Blogs
        </span>
        {!isBlogsLoading ? (
          <div className="flex flex-wrap gap-6 py-8">
            {mostPopularBlogs?.map((item: any, index: number) => (
              <div className="max-w-[450px]" key={index}>
                <div className="w-full h-[280px]">
                  <img src={item.image} alt="qwe" className="h-full w-full" />
                </div>
                <div className="px-2">
                  <div className="font-semibold text-blue-950 text-xl py-2">
                    {item.title}
                  </div>
                  <div className="">
                    {truncateDescription(item.description, 35)}
                  </div>
                  <div className="flex gap-4 py-4">
                    <div className="flex h-[50px] w-[50px] rounded-lg overflow-hidden justify-center items-center">
                      <FaRegUserCircle className="text-blue-950 text-7xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-950">
                        {`${item?.user?.firstName} ${item?.user?.lastName}`}
                      </div>
                      <div>
                        {moment(item.createdAt).format("DD, MMMM YYYY")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[60vh] flex justify-center items-center rounded-md bg-blue-50 py-2 my-6">
            <Loader color="#172554" type="spin" height={50} width={50} />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default MostPopular;
