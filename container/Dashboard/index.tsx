import React from "react";
import MostPopular from "@components/MostPopular";
import NewAddedBlog from "@components/NewAddedBlog";
import OtherBlogs from "@components/OtherBlogs";
import Layout from "@components/common/Layout";
import { useQuery } from "react-query";
import blogServices from "@services/APIs/blog";

function Dashboard() {
  const blogDataKey = "/api/blogs";
  const { data: blogsData, isLoading: isBlogsLoading } = useQuery(
    [blogDataKey],
    blogServices.getAllBlogs,
    {
      refetchOnWindowFocus: false,
      keepPreviousData: false,
    }
  );

  const blogData = blogsData?.data;
  const mainBlog = blogData?.slice(0, 1);
  const rightSideBlogs = blogData?.slice(1, 6);
  const mostPopularBlogs = blogData?.slice(6, 12);
  const otherBlogs = blogData?.slice(12);

  return (
    <Layout>
      <div className="space-y-12">
        <NewAddedBlog
          mainBlog={mainBlog}
          rightSideBlogs={rightSideBlogs}
          isBlogsLoading={isBlogsLoading}
        />
        <MostPopular
          mostPopularBlogs={mostPopularBlogs}
          isBlogsLoading={isBlogsLoading}
        />
        <OtherBlogs otherBlogs={otherBlogs} isBlogsLoading={isBlogsLoading} />
      </div>
    </Layout>
  );
}

export default Dashboard;
