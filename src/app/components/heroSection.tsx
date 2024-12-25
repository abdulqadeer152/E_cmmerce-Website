"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className="w-full min-h-[500px] md:h-[764px] bg-[#F2F0FF] flex flex-col md:flex-row px-4 md:px-0 py-8 md:py-0">
        {/* Left Section */}
        <div className="w-full md:w-auto md:ml-[70px] flex flex-col items-center md:items-start">
          {/* Light Image */}
          <div className="w-full max-w-[300px] md:max-w-[387px]">
            <Image 
              src={require("../../../public/Project - Ecom (An Ecommerce Ui Kit) (Community)/image 32.png")}
              alt="light"
              className="w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="mt-8 md:mt-[-100px] md:ml-[375px] text-center md:text-left px-4 md:px-0">
            <p className="text-red-500 text-sm md:text-base">Best Furniture for Your Castle...</p>
            <h1 className="font-bold text-2xl md:text-4xl mt-4">
              New Furniture Collection
              <br />
              Trend In 2024
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime totam debitis
              <br className="hidden md:block" />
              culpa quae distinctio itaque placeat.
            </p>
          </div>

          {/* Shop Now Button */}
          <div className="mt-6 md:mt-4 md:ml-[375px] w-full md:w-[163px]">
            <Link href={'/shopDefult'} className="flex items-center justify-center h-[50px] bg-[#FB2E86] text-white rounded w-full md:w-[163px] hover:bg-[#e91d75] transition-colors">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Section - Sofa Image */}
        <div className="mt-8 md:mt-[80px] relative">
          <div className="w-full max-w-[400px] md:max-w-[629px] mx-auto">
            <Image 
              alt="sofa"
              src={require("../../../public/Project - Ecom (An Ecommerce Ui Kit) (Community)/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png")}
              className="w-full h-auto"
            />
          </div>

          {/* Discount Badge */}
          <div className="absolute right-4 md:right-[17%] top-0 text-white">
            <Image 
              src={require("../../../public/Vector 14.png")}
              alt="vector"
              className="w-16 md:w-auto"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl whitespace-nowrap">
              50% off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;