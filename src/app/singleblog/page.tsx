"use client";

import { ArrowBigLeft, ArrowBigRight, SearchIcon, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaPenNib, FaTwitter } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="w-full bg-[#F6F5FF] py-16 px-4 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#101750] text-3xl md:text-4xl font-bold">Single Blog</h1>
          <p className="font-bold mt-2">
            Home.Pages <span className="text-[#FB2E86]">.Single blog</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 flex flex-col lg:flex-row gap-8">
        {/* Left Column - Blog Content */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-8">
            {/* Main Image */}
            <div className="w-full">
              <Image
                alt="image"
                src={require("../../../public/bruce-mars-FWVMhUa_wbY-unsplash 2.png")}
                className="w-full h-auto"
              />
            </div>

            {/* Author and Date */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-2 text-[#151875]">
                <FaPenNib color="#FB2E86" />
                <p className="font-bold bg-[#FFE7F9]">SabirAli</p>
              </div>
              <div className="flex items-center gap-2 px-2 text-[#151875]">
                <SlCalender color="#FFA454" />
                <pre className="font-bold bg-[#FFE7F9]">21 August, 2024</pre>
              </div>
            </div>

            {/* Blog Content */}
            <div className="space-y-6">
              <h1 className="text-[#151875] font-bold text-2xl md:text-3xl">
                Mauris at orci non vulputate diam tincidunt nec.
              </h1>
              <p className="text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
                eu malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </p>

              {/* Quote Block */}
              <div className="bg-[#FAFAFB] p-6 border-l-2 border-pink-800">
                <p className="text-[#8A8FB9]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo dictum sapien, amet, consequat."
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  alt="video"
                  src={require("../../../public/Group 92.png")}
                  className="w-full h-auto"
                />
                <Image
                  alt="e"
                  src={require("../../../public/Rectangle 70.png")}
                  className="w-full h-auto"
                />
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="space-y-2">
                    <Image
                      alt="sofa"
                      src={require(`../../../public/Rectangle 63${index ? ` (${index})` : ''}.png`)}
                      className="w-full h-auto"
                    />
                    <p className="font-bold text-center">Quam sed</p>
                    <div className="flex justify-between items-center">
                      <p className="text-blue-600">
                        $32.00 -<span className="text-pink-600">$56.00</span>
                      </p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Share */}
              <div className="flex justify-center gap-4">
                <FaFacebook className="w-6 h-6 text-purple-600" />
                <FaInstagram className="w-6 h-6 text-white bg-pink-600 rounded-full p-1" />
                <FaTwitter className="w-6 h-6 text-white bg-blue-700 rounded-full p-1" />
              </div>

              {/* Navigation */}
              <div className="bg-[#F7F8FB] p-4 flex justify-between items-center">
                <button className="flex items-center gap-2 text-[#8A8FB9]">
                  <ArrowBigLeft /> Previous Post
                </button>
                <button className="flex items-center gap-2 text-[#8A8FB9]">
                  Next Post <ArrowBigRight />
                </button>
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    className={`w-8 h-8 border-2 flex items-center justify-center
                      ${num === 1 ? 'bg-pink-600 text-white' : 'text-[#E0D3F5]'}`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="w-full lg:w-1/3 space-y-8">
          {/* Search */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl text-[#151875]">Search</h2>
            <div className="border-2 flex items-center p-2">
              <input
                type="text"
                placeholder="Search Post's"
                className="flex-1 outline-none"
              />
              <SearchIcon color="#BDBDD8" />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl text-[#151875]">Categories</h2>
            <div className="grid grid-cols-2 gap-2">
              {['Hobbies(14)', 'Women(21)', 'Women(21)', 'Women(21)', 'Women(21)', 'Women(21)'].map((category, index) => (
                <button
                  key={index}
                  className="p-2 font-bold text-[#151875] hover:bg-[#F939BF] hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl text-[#151875]">Recent Posts</h2>
            <div className="space-y-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex gap-4">
                  <Image
                    alt="recent post"
                    src={require(`../../../public/Rectangle 126.png`)}
                    className="w-20 h-auto"
                  />
                  <div>
                    <h3 className="text-[#151875]">It is a long established fact</h3>
                    <p className="text-sm text-gray-500">August 09 2020</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Offer Products */}
          <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-bold text-blue-800 mb-4">Offer Products</h2>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={require(`../../../public/Mask Group${index ? ` (${index})` : ''}.png`)}
                    alt={`Product ${index + 1}`}
                    className="w-full h-auto object-cover rounded-md"
                  />
                  <p className="text-blue-800 mt-2">Product Name</p>
                  <p className="text-gray-600">$12.00 - $15.00</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl text-[#151875]">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {['General', 'General', 'General', 'General', 'General'].map((tag, index) => (
                <button
                  key={index}
                  className="px-3 py-1 text-[#151875] hover:text-pink-600 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Image
          alt="logos"
          src={require("../../../public/image 1174.png")}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Page;