"use client";
import Image from "next/image";
import React from "react";

const Bg_photo = () => {
  return (
    <div className="w-full">
      {/* Background Image Section */}
      <div className="relative w-full h-[300px] md:h-[462px]">
        <Image
          alt="bg-image"
          src="/Rectangle 102.png"
          className="w-full h-full object-cover"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-2xl md:text-4xl text-[#151875] font-semibold max-w-[574px] mb-6">
            Get Latest Update By Subscribe Our Newsletter
          </h2>
          <button className="bg-[#FB2E86] text-white px-8 py-3 font-bold hover:bg-[#e1196d] transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full py-8 px-4 flex justify-center">
        <div className="relative w-full max-w-[904px] h-[50px] md:h-[93px]">
          <Image
            alt="logos"
            src="/image 1174.png" // Path relative to the public folder
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Bg_photo;
