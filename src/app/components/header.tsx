import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="mt-4 px-4 md:px-8 lg:px-16">
      {/* Header Container */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
          {/* Logo */}
          <div className="font-extrabold text-2xl">
            <Link href="/">
              <h1>Hekto</h1>
            </Link>
          </div>
          {/* Navigation */}
          <div className="flex justify-center">
            <ul className="flex flex-wrap items-center space-x-4 text-sm md:text-base">
              <Link href="/">
                <li className="text-red-400 hover:text-red-500">Home</li>
              </Link>
              <Link href="/shoplist">
                <li className="hover:text-red-500">Pages</li>
              </Link>
              <Link href="/productdetail">
                <li className="hover:text-red-500">Products</li>
              </Link>
              <Link href="/blogpage">
                <li className="hover:text-red-500">Blog</li>
              </Link>
              <Link href="/shopDefult">
                <li className="hover:text-red-500">Shop</li>
              </Link>
              <Link href="/contact">
                <li className="hover:text-red-500">Contact</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex items-center w-full md:w-[317px] border-2 border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Enter Product Name"
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <button className="text-red-500 px-4 flex items-center justify-center">
            <IoSearch size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
