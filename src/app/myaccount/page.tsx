"use client";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#F6F5FF] w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-[#101750] text-3xl md:text-4xl font-bold">My Account</h1>
          <p className="font-bold">
            Home.Pages <span className="text-[#FB2E86]">.My Account</span>
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="min-h-[650px] w-full px-4 flex justify-center items-center">
        <div className="w-full max-w-[544px] p-6 md:p-8 rounded-lg shadow-lg">
          <div className="max-w-[433px] mx-auto space-y-6">
            <div className="text-center">
              <h2 className="font-bold text-2xl mb-2">Login</h2>
              <p className="text-[#9096B2]">Please login using account detail bellow.</p>
            </div>

            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full border-2 px-4 py-3 rounded focus:outline-none focus:border-[#FB2E86]"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full border-2 px-4 py-3 rounded focus:outline-none focus:border-[#FB2E86]"
              />
              <p className="text-[#9096B2] hover:text-[#FB2E86] cursor-pointer transition-colors">
                Forgot Your Password?
              </p>
              <button className="w-full py-3 bg-[#FB2E86] text-white rounded hover:bg-[#e02675] transition-colors">
                Sign In
              </button>
            </form>

            <p className="text-[#9096B2] text-center">
              Don't have an Account?
              <span className="text-[#FB2E86] cursor-pointer hover:underline ml-1">
                Create account
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Image
            alt="logos"
            src="/image 1174.png"
            width={904}
            height={93}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;