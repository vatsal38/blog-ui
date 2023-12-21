import Layout from "@components/common/Layout";
import React, { useState } from "react";

function AddBlog() {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const addBlog = () => {
    console.log("data", data);
  };
  return (
    <Layout>
      <div className="px-2">
        <span className="text-white text-xl font-semibold bg-blue-950 px-4 py-1 rounded-md">
          Add Blogs
        </span>
        <div className="space-y-4 pt-12">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-blue-950 text-2xl font-semibold tracking-wide"
            >
              Title
            </label>
            <input
              name="title"
              id="title"
              type="text"
              className="border-solid border-blue-950 border-2 rounded-md p-3 max-w-xl w-full"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-blue-950 text-2xl font-semibold tracking-wide flex flex-col items-start"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
              className="border-solid border-blue-950 border-2 rounded-md p-3 max-w-xl w-full"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="relative">
            <button
              className="bg-blue-950 text-white font-semibold rounded-full px-12 h-10"
              onClick={addBlog}
            >
              <div className="w-20">Add Blog</div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddBlog;
