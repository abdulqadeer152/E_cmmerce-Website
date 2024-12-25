"use client";
import Image from "next/image";
import React from "react";

const TrendingProduct = () => {
  return (
    <div className="w-full">
      <div className="py-8 md:py-12 px-4">
        <h1 className="text-[#151875] text-2xl md:text-4xl font-bold mb-8 md:mb-16 text-center">
          Trending Products
        </h1>

        {/* Product Grid */}
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Product Cards */}
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full max-w-[247px] aspect-square bg-slate-200 flex justify-center items-center mb-4">
                  <Image
                    alt="chair"
                    src={require(`../../../public/${
                      index === 0
                        ? "Project - Ecom (An Ecommerce Ui Kit) (Community)/image 1171 (1).png"
                        : index === 1
                        ? "image 1170 (1).png"
                        : index === 2
                        ? "image 31.png"
                        : "image 32 (1).png"
                    }`)}
                  />
                </div>
                <p className="text-[#151875] py-2 font-bold">Cantilever chair</p>
                <div className="text-gray-500">
                  <span className="text-[#151875] font-bold">$35.00</span> $45.00
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Promo Cards */}
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="border-2 p-4 flex flex-col justify-between h-[270px]"
              >
                <div>
                  <h3 className="text-[#151875] font-bold text-xl md:text-2xl">
                    23% off in all products
                  </h3>
                  <p className="text-[#FB2E86] underline font-bold mt-2">
                    Shop Now
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="w-[213px]">
                    <Image
                      alt="promo"
                      src={require(`../../../public/image 116${
                        index + 1
                      }.png`)}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Product List */}
            <div className="space-y-4">
              {["30", "28", "19"].map((imageNum) => (
                <div key={imageNum} className="flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image
                      alt="chair"
                      src={require(`../../../public/image ${imageNum}.png`)}
                    />
                  </div>
                  <div className="font-bold">
                    <p>Executive Seat chair</p>
                    <p>$32.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;