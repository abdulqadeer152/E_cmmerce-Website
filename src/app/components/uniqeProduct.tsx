"use client";

import Image from "next/image";
import React from "react";

const UniqueProduct = () => {
  return (
    <div className="w-full">
      <div className="bg-[#F1F0FF] py-8 lg:py-16">
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Image Container */}
            <div className="w-full lg:w-1/2 bg-[#F5E1FC] border-2 flex justify-center items-center p-4">
              <div className="relative w-full aspect-square max-w-[558px]">
                <Image
                  alt="elipic"
                  src={require("../../../public/homeChair.png")}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/2 px-4 lg:px-12 py-8 lg:py-16">
              <h1 className="text-xl lg:text-2xl font-bold text-[#151875] mb-8">
                Unique Features Of Latest & Trending Products
              </h1>
              
              <div className="w-full max-w-[525px] mx-auto">
                <ul className="space-y-6 mb-8">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#FF4A4A] rounded-full inline-block mr-4 mt-1.5 flex-shrink-0" />
                    <p className="text-[#3C2275] text-sm lg:text-base">
                      All frames constructed with hardwood solids and laminates
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#4044EC] rounded-full inline-block mr-4 mt-1.5 flex-shrink-0" />
                    <p className="text-[#3C2275] text-sm lg:text-base">
                      Reinforced with double wood dowels, glue, screw - nails
                      corner blocks and machine nails
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#60C2AF] rounded-full inline-block mr-4 mt-1.5 flex-shrink-0" />
                    <p className="text-[#3C2275] text-sm lg:text-base">
                      Arms, backs and seats are structurally reinforced
                    </p>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
                  <button className="bg-[#F52B70] h-[45px] px-6 text-white font-bold rounded-md hover:bg-[#d92461] transition-colors w-full sm:w-auto">
                    Add To Cart
                  </button>
                  <div className="text-[#151875] font-bold">
                    <p>B&B Italian Sofa</p>
                    <p>$32.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueProduct