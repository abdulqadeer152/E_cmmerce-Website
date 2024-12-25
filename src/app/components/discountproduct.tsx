"use client";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const DiscountProduct = () => {
  const features = [
    "Material expose like metals",
    "Simple neutral colours",
    "Clear lines and geomatric figures",
    "Material expose like metals",
  ];

  return (
    <div className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-[#151875] text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          Discount Item
        </h1>

        {/* Navigation Tabs */}
        <div className="mb-8 md:mb-12">
          <ul className="flex flex-wrap justify-center gap-4 font-bold text-sm md:text-base">
            <li className="text-[#FB2E86] underline cursor-pointer">Wood Chair</li>
            <li className="cursor-pointer hover:text-[#FB2E86] transition-colors">Plastic Chair</li>
            <li className="cursor-pointer hover:text-[#FB2E86] transition-colors">Sofa Collection</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl text-[#151875] font-bold mb-4">
              20% Discount on All Products
            </h2>
            <h3 className="text-lg md:text-xl text-[#FB2E86] font-bold mb-4">
              Eams Sofa Compact
            </h3>
            <p className="text-[#B7BACB] font-bold mb-6 max-w-xl mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Eu eget feugiat habitasse nec, bibendum condimentum.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-xl mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-[#B7BACB] font-bold">
                  <FaCheck className="text-[#7569B2] flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#FB2E86] text-white px-8 py-3 rounded hover:bg-[#d92461] transition-colors font-bold">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <Image
                alt="discount-chair"
                src={require("../../../public/tortuga-01-b 1.png")}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;