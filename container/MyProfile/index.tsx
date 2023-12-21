import Layout from "@components/common/Layout";
import { useRouter } from "next/router";
import React from "react";

function MyProfile() {
  const router = useRouter();
  return (
    <Layout>
      <span className="text-white text-xl font-semibold bg-blue-950 px-4 py-1 rounded-md">
        Your Details
      </span>
      <div className="space-y-4 py-8 text-2xl ">
        <div className="flex gap-4">
          <span className="font-semibold text-gray-500">First Name</span>
          <span>:</span>
          <span className="text-blue-950 font-semibold underline">Vatsal</span>
        </div>
        <div className="flex gap-4">
          <span className="font-semibold text-gray-500">Last Name</span>
          <span>:</span>
          <span className="text-blue-950 font-semibold underline">Mavani</span>
        </div>
        <div className="flex gap-4">
          <span className="font-semibold text-gray-500">Username</span>
          <span>:</span>
          <span className="text-blue-950 font-semibold underline">
            vatsal38
          </span>
        </div>
        <div className="flex gap-4">
          <span className="font-semibold text-gray-500">Your Total Blogs</span>
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
    </Layout>
  );
}

export default MyProfile;
