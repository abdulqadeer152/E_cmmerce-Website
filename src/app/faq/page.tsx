"use client";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#F6F5FF] w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-[#101750] text-3xl md:text-4xl font-bold mb-2">FAQ</h1>
          <p className="font-bold">
            Home.Pages <span className="text-[#FB2E86]">.faq</span>
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* General Information */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#151875] font-bold text-2xl md:text-3xl mb-8">
              General Information
            </h2>
            
            <div className="space-y-12">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="space-y-4">
                  <h3 className="text-[#151875] font-semibold text-lg md:text-xl">
                    Eu dictumst cum at sed euismood condimentum?
                  </h3>
                  <p className="text-[#A1ABCC]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
                    sed tristique mollis vitae, consequat gravida sagittis.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ask a Question */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#CDCEDC] p-6 md:p-12 rounded-lg">
              <h2 className="text-[#151875] font-bold text-2xl mb-8">
                Ask a Question
              </h2>
              
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-[50px] border bg-white rounded px-4"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-[50px] border bg-white rounded px-4"
                />
                <textarea
                  placeholder="Type your message"
                  className="w-full h-[197px] border bg-white rounded p-4 resize-none"
                />
                <button className="w-full md:w-auto px-8 py-3 bg-[#FB2E86] text-white rounded font-semibold hover:bg-[#d91a6d] transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Image
            alt="Partner logos"
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