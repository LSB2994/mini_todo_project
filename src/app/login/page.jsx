"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function login() {
  return (
    <div className="">
      <div className="pl-10 mt-6">
        <div className="flex justify-between">
          <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        </div>
      </div>
      <div className="flex w-[1200px] justify-between mx-auto">
        <div class="w-full mt-[80px] h-[500px] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">
              Login
            </h5>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Don't have an account?{" "}
              <Link
                href="/register"
                class="text-blue-700 hover:underline dark:text-blue-500"
              >
                Register
              </Link>
            </div>
            <div className="flex items-center justify-center text-gray">
              <hr className="w-[100px]"/>
              <p className="ml-2 mr-2">Continue</p>
              <hr className="w-[100px]"/>
            </div>
            <button
              type="submit"
              class="w-full text-black border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Google
            </button>
          </form>
        </div>
        <div>
          <Image
            src="/assets/icons/login.svg"
            width={450}
            height={450}
            alt="black star"
          ></Image>
        </div>
      </div>
    </div>
  );
}
