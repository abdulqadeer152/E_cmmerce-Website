"use client"
import React from "react";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full px-4 py-4 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo and Navigation */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Logo */}
            <Link href="/" className="font-extrabold text-2xl">
              <h1>Hekto</h1>
            </Link>

            {/* Navigation */}
            <nav className="w-full md:w-auto">
              <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
                <Link href="/">
                  <li className="px-3 py-2 text-red-400 hover:text-red-500">Home</li>
                </Link>
                <Link href="/shoplist">
                  <li className="px-3 py-2 hover:text-red-400">Pages</li>
                </Link>
                <Link href="/productdetail">
                  <li className="px-3 py-2 hover:text-red-400">Products</li>
                </Link>
                <Link href="/blogpage">
                  <li className="px-3 py-2 hover:text-red-400">Blog</li>
                </Link>
                <Link href="/shopDefult">
                  <li className="px-3 py-2 hover:text-red-400">Shop</li>
                </Link>
                <Link href="/contact">
                  <li className="px-3 py-2 hover:text-red-400">Contact</li>
                </Link>
              </ul>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-auto max-w-md">
            <div className="flex items-center border-2 border-gray-300 rounded overflow-hidden">
              <input
                type="text"
                placeholder="Enter Product Name"
                className="flex-1 px-4 py-2 text-sm outline-none w-full"
              />
              <button className="text-red-500 px-4 py-2 hover:bg-red-50 transition-colors">
                <IoSearch size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;