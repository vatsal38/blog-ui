import React, { Fragment, useEffect, useState } from "react";
import Layout from "@components/common/Layout";
import { useQuery } from "react-query";
import blogServices from "@services/APIs/blog";
import AuthServices from "@services/AuthServices";
import { FaRegUserCircle } from "react-icons/fa";
import moment from "moment";
import Loader from "@components/common/Loader";
import { truncateDescription } from "@utils/constants";

function MyBlogsList() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(AuthServices.getUserIdFromToken());
  }, [userId]);

  const blogDataKey = `/api/${userId}/blogs`;
  const { data: blogData, isLoading: isBlogDataLoading } = useQuery(
    [blogDataKey, { userId }],
    blogServices.getBlogsByUserId,
    {
      refetchOnWindowFocus: false,
      keepPreviousData: false,
      enabled: !!userId,
    }
  );

  return (
    <Layout>
      <div className="px-2">
        <span className="text-white text-xl font-semibold bg-blue-950 px-4 py-1 rounded-md">
          My Blogs
        </span>
        <div className="flex flex-col gap-4 w-full">
          {!isBlogDataLoading ? (
            <div className="flex flex-col gap-4 w-full py-8">
              {blogData?.data?.map((item: any, index: number) => (
                <Fragment key={index}>
                  <div className="flex flex-col lg:flex-row gap-4 w-full">
                    <div className="sm:w-[400px] lg:h-[200px]">
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
                  {index + 1 !== blogData?.data?.length && <hr />}
                </Fragment>
              ))}
            </div>
          ) : (
            <div className="w-full h-[80vh] flex justify-center items-center rounded-md bg-blue-50 my-6">
              <div className="flex flex-col items-center gap-4">
                <Loader color="#172554" type="spin" height={50} width={50} />
                <p className="text-[15px] font-semibold text-red-600">
                  It can take more than minute due to free server.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default MyBlogsList;
