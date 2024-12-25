"use client";
import Image from "next/image";
import React from "react";

const ShopexOffer = () => {
  const offers = [
    {
      image: "free-delivery 1.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non laboriosam,"
    },
    {
      image: "cashback 1.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non laboriosam,"
    },
    {
      image: "Group.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non laboriosam,"
    },
    {
      image: "24-hours-support 1.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non laboriosam,"
    }
  ];

  return (
    <div className="w-full px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#151875] text-center mb-8 md:mb-12">
          What Shopex Offer!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 md:p-12 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="w-20 h-20 md:w-24 md:h-24 mb-3 rounded-full shadow-lg"
                  src={require(`../../../public/${offer.image}`)}
                  alt={offer.title}
                  width={96}
                  height={96}
                />
                <h5 className="mb-2 text-lg md:text-xl font-medium text-[#151875] dark:text-white">
                  {offer.title}
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopexOffer;