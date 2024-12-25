"use client"
import { IoMailOutline, IoCartOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import DropdownMenu from "./dropdowmn";
import DropdownMenuCurrancy from "./currancy_dropdown";
import { RiAccountCircle2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const Header_top = () => {
  return (
    <div className='min-h-[44px] w-full bg-violet-600 px-4 py-2 md:py-0'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4'>
        {/* Contact Info */}
        <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white text-sm'>
          <div className="flex items-center gap-2">
            <IoMailOutline />
            <p className="hidden sm:block">mhhasanul@gmail.com</p>
            <p className="sm:hidden">Email Us</p>
          </div>
          <div className="flex items-center gap-2">
            <FiPhoneCall />
            <p>(12345) 67890</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center flex-wrap justify-center gap-3 md:gap-4 text-white text-sm">
          <div className="hidden md:block">
            <DropdownMenu/>
          </div>
          <div className="hidden md:block">
            <DropdownMenuCurrancy/>
          </div>
          <Link href="/myaccount" className="flex items-center gap-1 hover:text-gray-200">
            <p>LogIn</p>
            <RiAccountCircle2Line />
          </Link>
          <Link href="/hectodemo" className="flex items-center gap-1 hover:text-gray-200">
            <p>WishList</p>
            <FaRegHeart />
          </Link>
          <IoCartOutline size={20} className="cursor-pointer hover:text-gray-200"/>
        </div>
      </div>
    </div>
  )
}

export default Header_top