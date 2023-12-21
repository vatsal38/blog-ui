import React, { useState } from "react";
import AuthServices from "@services/AuthServices";
import { useRouter } from "next/router";
import axiosInstance from "@services/axiosConfig";
import Loader from "@components/common/Loader";

function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const login = async () => {
    setIsLoading(true);
    const response: any = await axiosInstance.post(`/api/login`, data);
    if (response && response.token) {
      AuthServices.setToken(response.token);
      router.push("/dashboard");
    }
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-950 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:px-20 sm:py-14">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold pb-2">
                  Login with VM Blogs
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="e.g nick23"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      className="bg-blue-950 text-white font-semibold rounded-full px-12 h-10"
                      onClick={login}
                    >
                      <div className="w-20">
                        {isLoading ? (
                          <div className="flex justify-center w-full">
                            <Loader
                              color="#fff"
                              type="spin"
                              height={25}
                              width={25}
                            />
                          </div>
                        ) : (
                          "Sign in"
                        )}
                      </div>
                    </button>
                  </div>
                  <div className="font-light text-gray-500">
                    Don’t have an account yet?{" "}
                    <span
                      className="font-medium text-primary-600 hover:underline px-1 cursor-pointer"
                      onClick={() => router.push("/register")}
                    >
                      Sign up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-0 -z-10">
        <img src="/images/bg-page.svg" alt="bg" className="h-full w-full" />
      </div>
    </div>
  );
}

export default Login;
