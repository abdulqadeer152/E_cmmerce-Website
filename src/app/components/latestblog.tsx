"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Latestblog = () => {
  const blogPosts = [
    { image: "Frame 3.png" },
    { image: "Frame 4.png" },
    { image: "Frame 3 (1).png" }
  ];

  return (
    <div className="w-full py-8 md:py-12">
      <h1 className="text-2xl md:text-4xl text-[#151875] text-center font-bold mb-8 md:mb-12">
        Latest Blog
      </h1>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Container */}
              <div className="relative w-full aspect-[370/255] mb-4">
                <Image
                  alt={`blog-${index + 1}`}
                  src={require(`../../../public/${post.image}`)}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Meta Information */}
              <div className="flex justify-between items-center mb-4 px-2">
                <div className="flex items-center gap-2 text-[#151875]">
                  <FaPenNib className="text-[#FB2E86]" />
                  <p className="font-bold text-sm">SabirAli</p>
                </div>
                <div className="flex items-center gap-2 text-[#151875]">
                  <SlCalender className="text-[#FFA454]" />
                  <p className="font-bold text-sm">21 August, 2024</p>
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <h2 className="text-xl md:text-2xl font-bold text-[#151875] hover:text-[#FB2E86] transition-colors mb-3">
                  Top essential Trends in 2021
                </h2>
                <p className="text-[#151875] mb-4">
                  More off this less hello samlande lied much over tightly circa horse taped mightly
                </p>
                <Link href="/singleblog">
                  <span className="inline-block text-[#151875] hover:text-[#FB2E86] transition-colors underline font-bold text-lg md:text-xl cursor-pointer">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latestblog;