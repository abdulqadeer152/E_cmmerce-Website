"use client";
import React from "react";
import Image from "next/image";

const FeatureProduct = () => {
  const products = [
    {
      image: "image 1168.png",
      alt: "chair"
    },
    {
      image: "image 1.png",
      alt: "chair"
    },
    {
      image: "Project - Ecom (An Ecommerce Ui Kit) (Community)/image 1169.png",
      alt: "chair"
    },
    {
      image: "Project - Ecom (An Ecommerce Ui Kit) (Community)/image 3.png",
      alt: "chair"
    }
  ];

  return (
    <div className="py-8 md:py-12 min-h-[650px] px-4 md:px-8">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Featured Products</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="h-[361px] w-full max-w-[270px] mx-auto border-2 shadow-lg bg-white">
            <div className="h-[181px] w-[178px] m-auto mt-[20px] bg-gray-200 flex items-center justify-center">
              <Image
                src={require(`../../../public/${product.image}`)}
                alt={product.alt}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="hover:bg-blue-400 p-4 transition-colors duration-300">
              <h2 className="text-[#FB2E86] text-center mt-4 text-xl font-bold">
                Cantilever chair
              </h2>

              <div className="flex space-x-2 items-center justify-center mt-5">
                <div className="h-2 w-6 bg-teal-400"></div>
                <div className="h-2 w-6 bg-pink-500"></div>
                <div className="h-2 w-6 bg-blue-800"></div>
              </div>

              <p className="text-[#151875] text-center mt-4">
                Code - Y523201 <br />
                $42.00
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2 items-center justify-center mt-8 md:mt-[80px]">
        <div className="h-1 w-6 bg-teal-400"></div>
        <div className="h-1 w-6 bg-pink-500"></div>
        <div className="h-1 w-6 bg-blue-800"></div>
      </div>
    </div>
  );
};

export default FeatureProduct;