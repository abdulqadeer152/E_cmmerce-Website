"use client";

import { Circle, Grid, List } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const DefaultPage = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* Header */}
      <div className='bg-[#F6F5FF] w-full py-8 sm:py-12'>
        <div className='container mx-auto px-4'>
          <div className='max-w-xl'>
            <h1 className='text-[#101750] text-2xl sm:text-4xl font-bold'>Shop Grid Default</h1>
            <p className='font-bold'>
              Home.Pages <span className='text-[#FB2E86]'>.Shop Grid Shop</span>
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="container mx-auto px-4 mt-8 sm:mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 bg-white p-4">
          <div className="text-[#101750] font-bold text-lg sm:text-xl">
            Ecommerce Accesories & Fashion item
            <span className='block text-[#8A8FB9] text-xs sm:text-sm font-sans'>
              About 9,620 results (0.62 seconds)
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4">
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

      {/* Product Grid */}
      <div className='container mx-auto px-4 mt-8 sm:mt-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {[...Array(12)].map((_, index) => (
            <div key={index} className='w-full'>
              <div className='bg-[#F6F7FB] aspect-square flex justify-center items-center'>
                <div className='relative w-[201px] h-[201px]'>
                  <Image 
                    alt='Product Image'
                    src={`/image ${9 + index}.png`}
                    width={201}
                    height={201}
                    className='object-contain'
                  />
                </div>
              </div>
              <div className='text-center sm:text-left p-4'>
                <p className='font-bold text-lg sm:text-xl text-[#151875]'>
                  Vel elit euismod
                </p>
                <div className='flex gap-2 justify-center sm:justify-start mt-2'>
                  <Circle color='orange' size={11}/>
                  <Circle color='pink' size={11}/>
                  <Circle color='purple' size={11}/>
                </div>
                <p className='text-[#151875] font-semibold mt-2'>
                  $26.00 <span className='text-[#FB2E86]'>$42.00</span>
                </p>
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

export default DefaultPage;