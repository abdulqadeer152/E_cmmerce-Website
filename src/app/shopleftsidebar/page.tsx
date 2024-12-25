"use client";

import { Grid, Heart, List, Search, Share2, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const categories = [
  "PrestaShop", "Magento", "BigCommerce", "osCommerce", "3Dcart",
  "Bags", "Accessories", "Jewellery", "Watches"
];

const brands = [
  "Coaster Furniture", "Fusion Dot High Fashion", "Unique Furniture Restor",
  "Dream Furniture Flipping", "Young Repurposed", "Green DIY furniture"
];

const discounts = ["20% Cashback", "5% Cashback Offer", "25% Discount Offer"];
const pricefilter = ["$0.00 - $150.00", "$150.00 - $350.00", "$150.00 - $504.00", "$450.00 +"];

const ShopLeftSidebarPage = () => {
  return (
    <div className='min-h-screen'>
      {/* Header */}
      <div className='bg-[#F6F5FF] w-full py-8 sm:py-12'>
        <div className='container mx-auto px-4'>
          <div className='max-w-xl'>
            <h1 className='text-[#101750] text-2xl sm:text-4xl font-bold'>Shop List</h1>
            <p className='font-bold'>
              Home.Pages <span className='text-[#FB2E86]'>.Shop Grid Shop</span>
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-[1171px] mx-auto px-4 mt-8 sm:mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 bg-white p-4">
          <div className="text-[#101750] font-bold text-lg sm:text-xl">
            Ecommerce Accesories & Fashion item
            <span className='block text-[#8A8FB9] text-xs sm:text-sm font-sans'>
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

      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
              {/* Product Brand */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#151875]">Product Brand</h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
                      />
                      <span className="ml-3 text-sm text-[#7E81A2]">{brand}</span>
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
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#BCBDDB]"/>
              </div>

              {/* Color Filter */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4 text-[#151875] underline">
                  Filter By Color
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['blue', 'orange', 'black', 'green', 'purple', 'sky'].map((color) => (
                    <div key={color} className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full bg-${color}-500`}></div>
                      <span className="text-sm text-gray-600 capitalize">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="flex-1">
            <div className="space-y-6">
              {[...Array(7)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border-2">
                  <div className="flex flex-col sm:flex-row">
                    {/* Product content... */}
                    {/* Similar to shop-list page product cards */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className='container mx-auto px-4 py-8 sm:py-20'>
        <div className='relative w-full max-w-4xl mx-auto aspect-[904/93]'>
          <Image 
            alt='brand logos'
            src="/image 1174.png"
            fill
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default ShopLeftSidebarPage;