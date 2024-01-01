import Layout from "@components/common/Layout";
import React, { useState } from "react";
import blogServices from "@services/APIs/blog";
import { notify } from "@components/common/Notify";
import Loader from "@components/common/Loader";

function AddBlog() {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    if (e.target.name === "image") {
      setData({
        ...data,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addBlog = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image);

    blogServices.createBlog(formData).then((response) => {
      if (response) {
        notify.success("Blog created successfully.");
      }
      setIsLoading(false);
    });
  };
  return (
    <Layout>
      <div className="px-2">
        <span className="text-white text-xl font-semibold bg-blue-950 px-4 py-1 rounded-md">
          Add Blogs
        </span>
        <div className="space-y-4 pt-8">
          <div className="w-full">
            <label className="text-blue-950 text-2xl font-semibold tracking-wide flex flex-col items-start">
              {"Add Image"}
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="block w-full text-sm text-slate-500
                          file:mr-4 file:py-3 file:px-8
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-200 file:text-primary1
                          hover:file:bg-blue-100 py-2 bg-transparent appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600"
                accept=".jpg,.jpeg,.png"
                required
              />
            </label>
          </div>

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
              <div className="w-20">
                {isLoading ? (
                  <div className="flex justify-center w-full">
                    <Loader color="#fff" type="spin" height={25} width={25} />
                  </div>
                ) : (
                  "Add Blog"
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddBlog;
