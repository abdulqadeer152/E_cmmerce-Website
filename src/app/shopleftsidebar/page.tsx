"use client";

import {
  Grid,
  Heart,
  List,
  Search,
  Share2,
  ShoppingCart,
  Star,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const categories = [
  "PrestaShop",
  "Magento",
  "BigCommerce",
  "osCommerce",
  "3Dcart",
  "Bags",
  "Accessories",
  "Jewellery",
  "Watches",
];

const brands = [
  "Coaster Furniture",
  "Fusion Dot High Fashion",
  "Unique Furniture Restor",
  "Dream Furniture Flipping",
  "Young Repurposed",
  "Green DIY furniture",
];

const discounts = ["20% Cashback", "5% Cashback Offer", "25% Discount Offer"];
const pricefilter = [
  "$0.00 - $150.00",
  "$150.00 - $350.00",
  "$150.00 - $504.00",
  "$450.00 +",
];

const ShopLeftSidebarPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#F6F5FF] w-full py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-[#101750] text-2xl sm:text-4xl font-bold">
              Shop List
            </h1>
            <p className="font-bold">
              Home.Pages <span className="text-[#FB2E86]">.Shop Grid Shop</span>
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-[1171px] mx-auto px-4 mt-8 sm:mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 bg-white p-4">
          <div className="text-[#101750] font-bold text-lg sm:text-xl">
            Ecommerce Accesories & Fashion item
            <span className="block text-[#8A8FB9] text-xs sm:text-sm font-sans">
              About 9,620 results (0.62 seconds)
            </span>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Per Page:</span>
              <select className="text-sm border border-gray-200 rounded px-2 py-1 focus:outline-none">
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort By:</span>
              <select className="text-sm border border-gray-200 rounded px-2 py-1 focus:outline-none">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">View:</span>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Grid size={16} />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 ml-[383px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
              {/* Product Brand */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#151875]">
                  Product Brand
                </h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
                      />
                      <span className="ml-3 text-sm text-[#7E81A2]">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#151875]">
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
                      />
                      <span className="ml-3 text-sm text-[#7E81A2]">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#151875]">
                  Discounts
                </h3>
                <div className="space-y-3">
                  {discounts.map((discount) => (
                    <label key={discount} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
                      />
                      <span className="ml-3 text-sm text-[#7E81A2]">
                        {discount}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#151875]">
                  Price Filter
                </h3>
                <div className="space-y-3">
                  {pricefilter.map((priceRange) => (
                    <label key={priceRange} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
                      />
                      <span className="ml-3 text-sm text-[#7E81A2]">
                        {priceRange}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other filter sections... */}
              {/* Add similar sections for Discount Offer, Rating Item, Categories, and Price Filter */}

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  className="w-full border-2 p-2 pr-10"
                  placeholder="Search..."
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#BCBDDB]" />
              </div>

              {/* Color Filter */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4 text-[#151875] underline">
                  Filter By Color
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["blue", "orange", "black", "green", "purple", "sky"].map(
                    (color) => (
                      <div key={color} className="flex items-center gap-1">
                        <div
                          className={`w-3 h-3 rounded-full bg-${color}-500`}
                        ></div>
                        <span className="text-sm text-gray-600 capitalize">
                          {color}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="flex-1">
            <div className="w-[921px] h-[230px] bg-white rounded-lg shadow-sm overflow-hidden flex mt-[50px]">
              {/* Image Section */}
              <div className="w-[230px] h-[230px] flex-shrink-0">
                <img
                  src="/Rectangle 32.png"
                  alt="Smart Watch"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl font-semibold text-gray-900">
                      Dictum morbi
                    </h1>
                    <div className="flex items-center mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4">
                          <svg
                            className="text-yellow-400 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      $34.00
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      $50.00
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[921px] h-[230px] bg-white rounded-lg shadow-sm overflow-hidden flex mt-[50px]">
              {/* Image Section */}
              <div className="w-[230px] h-[230px] flex-shrink-0">
                <img
                  src="/Rectangle 32.png"
                  alt="Smart Watch"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl font-semibold text-gray-900">
                      Dictum morbi
                    </h1>
                    <div className="flex items-center mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4">
                          <svg
                            className="text-yellow-400 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      $34.00
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      $50.00
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[921px] h-[230px] bg-white rounded-lg shadow-sm overflow-hidden flex mt-[50px]">
              {/* Image Section */}
              <div className="w-[230px] h-[230px] flex-shrink-0">
                <img
                  src="/Rectangle 32.png"
                  alt="Smart Watch"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl font-semibold text-gray-900">
                      Dictum morbi
                    </h1>
                    <div className="flex items-center mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4">
                          <svg
                            className="text-yellow-400 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      $34.00
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      $50.00
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[921px] h-[230px] bg-white rounded-lg shadow-sm overflow-hidden flex mt-[50px]">
              {/* Image Section */}
              <div className="w-[230px] h-[230px] flex-shrink-0">
                <img
                  src="/Rectangle 32.png"
                  alt="Smart Watch"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl font-semibold text-gray-900">
                      Dictum morbi
                    </h1>
                    <div className="flex items-center mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4">
                          <svg
                            className="text-yellow-400 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      $34.00
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      $50.00
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[921px] h-[230px] bg-white rounded-lg shadow-sm overflow-hidden flex mt-[50px]">
              {/* Image Section */}
              <div className="w-[230px] h-[230px] flex-shrink-0">
                <img
                  src="/Rectangle 32.png"
                  alt="Smart Watch"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl font-semibold text-gray-900">
                      Dictum morbi
                    </h1>
                    <div className="flex items-center mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4">
                          <svg
                            className="text-yellow-400 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      $34.00
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      $50.00
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[921px] h-[230px] bg-white rounded-lg shadow-sm overflow-hidden flex mt-[50px]">
              {/* Image Section */}
              <div className="w-[230px] h-[230px] flex-shrink-0">
                <img
                  src="/Rectangle 32.png"
                  alt="Smart Watch"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl font-semibold text-gray-900">
                      Dictum morbi
                    </h1>
                    <div className="flex items-center mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4">
                          <svg
                            className="text-yellow-400 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      $34.00
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      $50.00
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="container mx-auto px-4 py-8 sm:py-20">
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

export default ShopLeftSidebarPage;
