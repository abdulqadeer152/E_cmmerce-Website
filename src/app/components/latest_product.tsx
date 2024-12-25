"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const LatestProduct = () => {
  const [activeTab, setActiveTab] = useState('New Arrival');
  
  const products = [
    {
      image: "image 1166.png",
      alt: "chair-1166",
    },
    {
      image: "image 15.png",
      alt: "chair-1166",
    },
    {
      image: "image 1168 (1).png",
      alt: "chair-1166",
    },
    {
      image: "image 23.png",
      alt: "chair-1166",
    },
    {
      image: "Project - Ecom (An Ecommerce Ui Kit) (Community)/image 1172.png",
      alt: "chair-1166",
    },
    {
      image: "image 3 (1).png",
      alt: "chair-1166",
    }
  ];

  return (
    <div className="w-full px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#151875] text-center">
          Latest Products
        </h1>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 md:mt-8 text-base md:text-xl">
          {['New Arrival', 'Best Seller', 'Featured', 'Special Offer'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab ? 'text-[#FB4997]' : 'text-gray-600 hover:text-[#FB4997]'
              } transition-colors duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-8 md:mt-12">
          {products.map((product, index) => (
            <div key={index} className="w-full max-w-[360px] mx-auto">
              <div className="w-full aspect-square bg-[#F7F7F7] flex items-center justify-center p-4">
                <Image
                  alt={product.alt}
                  src={require(`../../../public/${product.image}`)}
                  className="w-auto h-auto object-contain"
                />
              </div>
              <div className="flex justify-between items-center px-4 mt-4">
                <p className="text-[#151875] font-bold">Comfort Handy Craft</p>
                <p className="whitespace-nowrap">
                  <span className="text-[#151875]">$42.00</span>
                  {' '}
                  <span className="text-[#FB4997] ml-2">$65.00</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;