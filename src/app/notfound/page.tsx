"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#F6F5FF] w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-[#101750] text-2xl md:text-4xl font-bold mb-2">404 Not Found</h1>
            <p className="font-bold">
              Home.Pages <span className="text-[#FB2E86]">.404 Not found</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-4xl w-full">
          <div className="relative w-full aspect-[913/750]">
            <Image 
              alt="404 illustration" 
              src="/Group 123.png"
              fill
              className="object-contain"
              priority
            />
          </div>
          <Link href="/">
            <button className="w-full md:w-auto px-8 py-3 bg-[#FB2E86] text-white font-semibold rounded hover:bg-[#e91a75] transition-colors mt-8 block mx-auto text-center">
              Back To Home
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

export default NotFound;