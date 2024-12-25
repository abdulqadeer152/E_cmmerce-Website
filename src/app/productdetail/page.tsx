"use client";

import { ArrowBigRight, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetail = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#F6F5FF] w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-[#101750] text-2xl md:text-4xl font-bold mb-2">Product Details</h1>
            <p className="font-bold">
              Home.Pages <span className="text-[#FB2E86]">.Product Details</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Image Gallery */}
            <div className="w-full md:w-1/2 p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Thumbnails */}
                <div className="flex md:flex-col gap-2 md:gap-4 order-2 md:order-1">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className="w-16 md:w-24 aspect-square border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <Image
                        src="/Rectangle 134.png"
                        alt={`Product thumbnail ${index}`}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Main Image */}
                <div className="relative aspect-square rounded-lg overflow-hidden order-1 md:order-2 flex-1">
                  <Image
                    src="/Rectangle 138.png"
                    alt="Product main image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="w-full md:w-1/2 p-4 md:p-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#0D134E] mb-2">
                Plywood arm chair
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(15)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold text-gray-900">$52.00</span>
                <span className="text-lg text-red-500 line-through">$30.00</span>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                <div className="flex gap-2">
                  {["bg-black", "bg-blue-600", "bg-red-500", "bg-green-500"].map(
                    (color, index) => (
                      <button
                        key={index}
                        className={`w-8 h-8 rounded-full ${color} border-2 border-white ring-2 ring-transparent hover:ring-gray-300 transition-all`}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor
                purus at vulputate ut.
              </p>

              {/* Actions */}
              <div className="flex gap-4">
                <Link href="/shoppingcart" className="flex-1">
                  <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-[#FB2E86] transition-colors">
                    Add To Cart
                  </button>
                </Link>
                <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 space-y-2">
                <p className="font-bold text-black">Categories</p>
                <p className="font-bold text-black">Tag</p>
                <p className="font-bold text-black">Share</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="bg-[#F9F8FE] mt-8 md:mt-16 p-4 md:p-8 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 md:gap-14 mb-8">
              <h2 className="text-[#151875] font-bold text-lg md:text-xl">Description</h2>
              <h2 className="text-[#151875] font-bold text-lg md:text-xl">Additional Info</h2>
              <h2 className="text-[#151875] font-bold text-lg md:text-xl">Reviews</h2>
              <h2 className="text-[#151875] font-bold text-lg md:text-xl">Videos</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-[#151875] font-bold text-xl mb-3">Varies tempor</h2>
                <p className="text-[#A9ACC6]">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare
                  faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est
                  bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet.
                </p>
              </div>

              <div>
                <h2 className="text-[#151875] font-bold text-xl mb-3">More details</h2>
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="flex items-start gap-2 mt-4">
                    <ArrowBigRight className="flex-shrink-0 mt-1" />
                    <p className="text-[#A9ACC6]">
                      Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
                      nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
                      massa viverr.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8 md:mt-16">
          <h2 className="text-[#101750] font-bold text-2xl md:text-3xl mb-6 md:mb-8">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    alt={`Related product ${index}`}
                    src={`/Rectangle ${127 + index}.png`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[#101750] font-bold">Mens Fashion Wear</h3>
                      <p className="text-[#101750] font-bold mt-2">$43.00</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Logos */}
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

export default ProductDetail;