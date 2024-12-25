"use client";

import { Grid, Heart, List, Share2, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ShopListPage = () => {
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

      {/* Product List */}
      <div className='container mx-auto px-4 mt-8 sm:mt-20'>
        <div className='space-y-6'>
          {[...Array(7)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border-2">
              <div className="flex flex-col sm:flex-row">
                {/* Image Section */}
                <div className="w-full sm:w-[314px] h-[218px] p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={`/Rectangle 32${index ? ` (${index})` : ''}.png`}
                      alt="Product image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div>
                      <h2 className="text-xl text-[#111C85] font-bold">Accumsan tincidunt</h2>
                      <div className="flex gap-3 mt-2 sm:mt-[-18px] sm:px-[250px]">
                        <span className="w-3 h-3 rounded-full bg-[#DE9034]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#E60584]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#5E37FF]"></span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-lg font-bold text-[#111C85]">$25.00</span>
                        <span className="text-sm text-[#FF2AAA]">$50.00</span>
                        <div className="flex items-center ml-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
                    adipiscing in phasellus non in justo.
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <ShoppingCart className="w-6 h-6 text-gray-600" />
                    </button>
                    <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <Heart className="w-6 h-6 text-gray-600" />
                    </button>
                    <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <Share2 className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default ShopListPage;