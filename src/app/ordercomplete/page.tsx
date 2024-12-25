"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsClock } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";

const OrderComplete = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#F6F5FF] w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-[#101750] text-2xl md:text-4xl font-bold mb-2">Order Complete</h1>
            <p className="font-bold">
              Home.Pages <span className="text-[#FB2E86]">.Order Complete</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center p-4 md:p-8 bg-gray-50">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6 md:p-8 relative">
          {/* Icons */}
          <div className="hidden md:flex absolute top-[-40px] left-[-40px] w-20 h-20 bg-white justify-center items-center rounded-full shadow-md">
            <BsClock size={40} color="#395093" />
          </div>
          <div className="hidden md:flex absolute bottom-[-40px] right-[-40px] w-20 h-20 bg-white justify-center items-center rounded-full shadow-md">
            <TbChecklist size={40} color="#FB2E86" />
          </div>

          {/* Check Icon */}
          <div className="w-16 h-16 bg-pink-100 flex justify-center items-center rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#FF3366"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Text Content */}
          <h2 className="text-xl md:text-2xl font-bold text-[#1D3178] mb-2 text-center">
            Your Order Is Completed!
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6 px-4">
            Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.
          </p>

          {/* Button */}
          <Link href="/">
            <button className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative w-full max-w-4xl mx-auto aspect-[904/93]">
          <Image 
            alt="brand logos" 
            src="/image 1174.png"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;