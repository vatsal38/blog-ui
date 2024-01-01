import Layout from "@components/common/Layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import userServices from "@services/APIs/user";
import AuthServices from "@services/AuthServices";
import Loader from "@components/common/Loader";

function MyProfile() {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  const userKey = `api/user/${userId}`;
  const { data: user, isLoading: isUserLoading } = useQuery(
    [userKey, { userId }],
    userServices.getUserById,
    {
      refetchOnWindowFocus: false,
      keepPreviousData: false,
      enabled: !!userId,
    }
  );

  useEffect(() => {
    setUserId(AuthServices.getUserIdFromToken());
  }, [userId]);

  return (
    <Layout>
      <span className="text-white text-xl font-semibold bg-blue-950 px-4 py-1 rounded-md">
        Your Details
      </span>
      {!isUserLoading ? (
        <div className="space-y-4 py-8 text-2xl">
          <div className="flex gap-4">
            <span className="font-semibold text-gray-500">First Name</span>
            <span>:</span>
            <span className="text-blue-950 font-semibold underline">
              {user?.data?.firstName}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold text-gray-500">Last Name</span>
            <span>:</span>
            <span className="text-blue-950 font-semibold underline">
              {user?.data?.lastName}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold text-gray-500">Username</span>
            <span>:</span>
            <span className="text-blue-950 font-semibold underline">
              {user?.data?.username}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold text-gray-500">
              Your Total Blogs
            </span>
            <span>:</span>
            <span className="text-blue-950 font-semibold">25</span>
          </div>
          <div className="pt-8">
            Click{" "}
            <span
              className="font-bold text-blue-950 cursor-pointer"
              onClick={() => router.push("/add-blog")}
            >
              here
            </span>{" "}
            to add blogs.
          </div>
        </div>
      ) : (
        <div className="py-8 pl-12">
          <Loader color="#172554" type="spin" height={25} width={25} />
        </div>
      )}
    </Layout>
  );
}

export default MyProfile;
