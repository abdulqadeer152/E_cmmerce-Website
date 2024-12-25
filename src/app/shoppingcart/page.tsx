"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='bg-white min-h-screen'>
      {/* Hero Section */}
      <div className="bg-[#F6F5FF] w-full py-12 px-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#101750] text-3xl md:text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="font-bold">
            Home.Pages <span className="text-[#FB2E86]">.Shopping Cart</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
            {/* Cart Items Section */}
            <div className="flex-1">
              {/* Headers */}
              <div className="hidden md:grid grid-cols-4 gap-4 text-center border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold text-[#1D3178]">Product</h2>
                <h2 className="text-xl font-semibold text-[#1D3178]">Price</h2>
                <h2 className="text-xl font-semibold text-[#1D3178]">Quantity</h2>
                <h2 className="text-xl font-semibold text-[#1D3178]">Total</h2>
              </div>

              {/* Cart Items */}
              <div className="space-y-6">
                {Array(5).fill(null).map((_, idx) => (
                  <div key={idx} className="flex flex-col md:grid md:grid-cols-4 gap-4 items-center border-b pb-4">
                    {/* Product */}
                    <div className="flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-left w-full">
                      <div className="w-24 h-24 relative mb-2 md:mb-0">
                        <Image 
                          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                          alt="Product image" 
                          width={96} 
                          height={96}
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Product Title {idx + 1}</h3>
                        <p className="text-sm text-gray-500">Color: Brown</p>
                        <p className="text-sm text-gray-500">Size: XL</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center w-full md:w-auto">
                      <span className="md:hidden font-medium text-gray-600">Price: </span>
                      <span className="font-medium">$32.00</span>
                    </div>

                    {/* Quantity */}
                    <div className="text-center w-full md:w-auto">
                      <span className="md:hidden font-medium text-gray-600">Quantity: </span>
                      <input
                        type="number"
                        min="1"
                        className="w-20 text-center border rounded p-1"
                        defaultValue={1}
                      />
                    </div>

                    {/* Total */}
                    <div className="text-center w-full md:w-auto">
                      <span className="md:hidden font-medium text-gray-600">Total: </span>
                      <span className="font-medium">£219.00</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Actions */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
                <button className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                  Update Cart
                </button>
                <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Cart Summary Section */}
            <div className="lg:w-96 space-y-6">
              {/* Cart Totals */}
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <p className="text-gray-700">Subtotal:</p>
                    <p className="font-medium">£219.00</p>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <p className="text-gray-700">Total:</p>
                    <p className="font-medium text-lg">£325.00</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 my-4">
                  Shipping & taxes calculated at checkout
                </p>
                <Link href="/ordercomplete" className="block">
                  <button className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>

              {/* Shipping Calculator */}
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Calculate Shipping</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Bangladesh"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Mirpur Dhaka - 1200"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>
                <button className="mt-4 w-full px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                  Calculate Shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;