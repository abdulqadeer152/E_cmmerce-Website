"use client";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#F6F5FF] w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-[#101750] text-3xl md:text-4xl font-bold">Heckto Demo</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-[#101750] text-xl md:text-2xl font-bold">Heckto Demo</h1>
        <p className="text-[#101750] font-bold mt-4 mb-6">
          Cart/ Information/ Shipping/ Payment
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#BFC6E0] p-4 md:p-8 rounded-lg">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                <form className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-md"
                      placeholder="Enter your email or phone number"
                    />
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="subscribe" className="mr-2" />
                    <label htmlFor="subscribe" className="text-sm text-gray-600">
                      Keep me up to date on news and exclusive offers
                    </label>
                  </div>

                  {/* Shipping Address */}
                  <h2 className="text-2xl font-semibold text-gray-800 pt-4">Shipping address</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md"
                      placeholder="First name (optional)"
                    />
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md"
                      placeholder="Last name"
                    />
                  </div>

                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md"
                    placeholder="Address"
                  />

                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md"
                    placeholder="Apartment, suite, etc. (optional)"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md"
                      placeholder="City"
                    />
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md"
                      placeholder="Postal Code"
                    />
                  </div>

                  <select className="w-full px-4 py-2 rounded-md">
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                  </select>

                  <button className="bg-pink-500 text-white px-8 py-2 rounded-md hover:bg-pink-600 transition-colors">
                    Continue Shipping
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-1/3">
            {/* Cart Items */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item}>
                  <div className="flex items-center gap-4 p-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        alt={`Product ${item}`}
                        src={`/Rectangle ${34 + item}.png`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold">Ut diam consequat</h3>
                      <p className="text-[#A1A8C1]">Color: Brown</p>
                      <p className="text-[#A1A8C1]">Size: XL</p>
                    </div>
                    <p className="text-[#15245E] font-bold">$32.00</p>
                  </div>
                  <hr className="my-4" />
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-[#F4F4FC] p-6 rounded-lg mt-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotals:</span>
                  <span className="font-bold">£219.00</span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <span>Totals:</span>
                  <span className="font-bold">£325.00</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    />
                  </svg>
                  Shipping & taxes calculated at checkout
                </div>
                <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">
                  Proceed To Checkout
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