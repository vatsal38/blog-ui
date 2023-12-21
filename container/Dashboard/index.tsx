import MostPopular from "@components/MostPopular";
import NewAddedBlog from "@components/NewAddedBlog";
import OtherBlogs from "@components/OtherBlogs";
import Layout from "@components/common/Layout";
import React from "react";

function DashboardPage() {
  return (
    <Layout>
      <div className="space-y-12">
        <NewAddedBlog />
        <MostPopular />
        <OtherBlogs />
      </div>
    </Layout>
  );
}

export default DashboardPage;
