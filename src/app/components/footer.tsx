"use client";
import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#E7E4F8]">
      <footer className="w-full bg-[#F9F8FE] text-[#1A0B5B] py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - Logo and Contact Info */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold">Hekto</h1>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="flex-1 h-10 px-4 border rounded-l-md sm:max-w-[250px]"
                />
                <button className="bg-[#FB2E86] text-white h-10 px-4 rounded-md sm:rounded-l-none hover:bg-[#e1196d] transition-colors">
                  Sign Up
                </button>
              </div>
              <div>
                <p className="font-medium mb-2">Contact Info</p>
                <p className="text-sm">17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </div>
            </div>

            {/* Column 2 - Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Laptops & Computers</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Cameras & Photography</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Smart Phones & Tablets</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Video Games & Consoles</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Waterproof Headphones</li>
              </ul>
            </div>

            {/* Column 3 - Customer Care */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Customer Care</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">My Account</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Discount</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Returns</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Orders History</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Order Tracking</li>
              </ul>
            </div>

            {/* Column 4 - Pages */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Pages</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Browse the Shop</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Category</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Pre-Built Pages</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">Visual Composer Elements</li>
                <li className="hover:text-[#FB2E86] cursor-pointer transition-colors">WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright and Social Media */}
      <div className="w-full py-4 px-4">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[#9DA0AE] text-sm">©Webecy - All Rights Reserved</div>
          <div className="flex items-center gap-4">
            <IoLogoFacebook className="text-[#151875] text-xl hover:text-[#FB2E86] cursor-pointer transition-colors" />
            <AiFillInstagram className="text-[#151875] text-xl hover:text-[#FB2E86] cursor-pointer transition-colors" />
            <FaSquareTwitter className="text-[#151875] text-xl hover:text-[#FB2E86] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;