"use client";

import { SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaPenNib, FaTwitter } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#F6F5FF] w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-[#101750] text-3xl md:text-4xl font-bold mb-2">Blog Page</h1>
          <p className="font-bold">
            Home.Pages <span className="text-[#FB2E86]">.Blog Page</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="mb-16">
                <div className="w-full aspect-[16/9] relative">
                  <Image
                    alt={`Blog image ${item}`}
                    src={`/bruce-mars-FWVMhUa_wbY-unsplash ${item + 1}.png`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2 px-2 text-[#151875]">
                    <FaPenNib color="#FB2E86" />
                    <p className="font-bold bg-[#FFE7F9]">SabirAli</p>
                  </div>
                  <div className="flex items-center gap-2 px-2 text-[#151875]">
                    <SlCalender color="#FFA454" />
                    <p className="font-bold bg-[#FFE7F9]">21 August, 2024</p>
                  </div>
                </div>

                <h2 className="text-[#151875] mt-6 font-bold text-xl md:text-2xl">
                  Mauris at orci non vulputate diam tincidunt nec.
                </h2>
                <p className="text-[#8A8FB9] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
                  eu malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>
                <button className="text-[#151875] font-bold mt-6 hover:text-[#FB2E86] transition-colors">
                  Read More
                </button>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center gap-2 mb-12">
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

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            {/* Search */}
            <div>
              <h2 className="font-bold text-2xl text-[#151875] mb-4">Search</h2>
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
            <div>
              <h2 className="font-bold text-2xl text-[#151875] mb-4">Categories</h2>
              <div className="grid grid-cols-2 gap-2">
                {Array(6).fill('Women(21)').map((text, i) => (
                  <button
                    key={i}
                    className="p-2 font-bold text-[#151875] hover:bg-[#F939BF] hover:text-white transition-colors"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="font-bold text-2xl text-[#151875] mb-4">Recent Post</h2>
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-20 h-14 relative flex-shrink-0">
                      <Image
                        alt="Recent post"
                        src={`/Rectangle 126${i ? ` (${i})` : ''}.png`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-[#151875] text-sm font-medium">
                        It is a long established fact
                      </h3>
                      <p className="text-sm text-gray-500">August 09 2020</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sale Products */}
            <div>
              <h2 className="font-bold text-2xl text-[#151875] mb-4">Sale Products</h2>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-20 h-14 relative flex-shrink-0">
                      <Image
                        alt="Sale product"
                        src={`/Rectangle 126${i ? ` (${i})` : ''}.png`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-[#151875] text-sm font-medium">
                        It is a long established fact
                      </h3>
                      <p className="text-sm text-gray-500">August 09 2020</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offer Products */}
            <div className="p-6 bg-white shadow-md rounded-md">
              <h2 className="text-lg font-bold text-[#151875] mb-4">Offer Products</h2>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="text-center">
                    <div className="relative w-full aspect-square mb-2">
                      <Image
                        src={`/Mask Group${i ? ` (${i})` : ''}.png`}
                        alt={`Product ${i + 1}`}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-[#151875] text-sm">Duis lectus est.</p>
                    <p className="text-gray-600 text-sm">$12.00 - $15.00</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Follow */}
            <div>
              <h2 className="font-bold text-2xl text-[#151875] mb-4">Follow</h2>
              <div className="flex gap-4">
                <FaFacebook className="w-8 h-8 text-purple-600" />
                <FaInstagram className="w-8 h-8 text-white bg-pink-600 rounded-full p-1" />
                <FaTwitter className="w-8 h-8 text-white bg-blue-700 rounded-full p-1" />
              </div>
            </div>

            {/* Tags */}
            <div>
              <h2 className="font-bold text-2xl text-[#151875] mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    className="text-[#151875] hover:text-pink-600 transition-colors"
                  >
                    General
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Image
            alt="logos"
            src="/image 1174.png"
            width={904}
            height={93}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;