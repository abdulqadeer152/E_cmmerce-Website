"use client";
import Image from 'next/image';
import React from 'react';

const Topcatgory = () => {
  return (
    <div className="w-full">
      <div className="py-8 md:py-12 px-4">
        <h1 className="font-bold text-2xl md:text-4xl text-[#151875] text-center mb-8 md:mb-12">
          Top Categories
        </h1>

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "image 1168 (1).png" },
              { img: "Project - Ecom (An Ecommerce Ui Kit) (Community)/image 1171 (1).png" },
              { img: "image 1168 (1).png" },
              { img: "Project - Ecom (An Ecommerce Ui Kit) (Community)/image 1172.png" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative group w-full aspect-square max-w-[269px]">
                  <div className="h-full w-full rounded-full border-2 bg-[#F6F7FB] flex flex-col items-center justify-center overflow-hidden">
                    <div className="relative w-3/4 aspect-square">
                      <Image
                        src={require(`../../../public/${item.img}`)}
                        alt="chair"
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-[#08D15F] text-white px-4 py-1.5 rounded hover:bg-[#07b954] transition-colors">
                        View Shop
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-[#151875] mt-4 font-medium">Mini LCW Chair</p>
                <p className="text-[#151875] font-bold">$56.00</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topcatgory;