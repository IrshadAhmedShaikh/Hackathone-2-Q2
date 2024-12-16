import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";

const AboutNAV = () => {
  return (
    <div className="max-w-[1440px] h-[132px] p-2 mt-4">
      <div className="flex justify-evenly items-center text-[#FFFFFF] bg-[#2A254B]">
        <div className="h-[41px] flex justify-evenly items-center text-[#FFFFFF] bg-[#2A254B]">
          <TbTruckDelivery />

          <p>Free delivery on all orders over £50 with code easter checkout</p>
          <div className="ml-[60px]">X</div>

        
        </div>
      </div>
      <div className="w-full flex justify-between items-center  bg-[#FFFFFF] border-b-[0.5px]">
        <h1 className="font-[clash] text-[24px] text-[#22202E] leading-[29.54px] border-b-[0.5px] mt-2">
          Avion
        </h1>

        <div className="flex gap-3 text-2xl">
          <ul className="flex gap-3 font-[satoshi] text-[16px] text-[#726E8D] leading-[29.54px] border-b-[0.5px] ">
            <Link href="/">
              <li className="hover:underline underline-offset-2">Home</li>
            </Link>
            <Link href="">
              <li className="hover:underline underline-offset-2">Contact</li>
            </Link>
            <Link href="">
              <li className="hover:underline underline-offset-2">Blog</li>
            </Link>
          </ul>
          <CiSearch className="text-3xl" />

          <MdOutlineShoppingCart />

          <CgProfile />
        </div>
      </div>
      <ul className="flex justify-center items-center gap-8 mt-4 ">
        <li className="hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]">
          All Products
        </li>
        <li className="hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]">
          Plant pots
        </li>
        <li className="hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]">
          Ceramics
        </li>
        <li className="hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]">
          Tables
        </li>
        <li className="hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]">
          Chairs
        </li>
        <li className="hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]">
          Crockery
        </li>
        <li className="hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]">
          Tableware
        </li>
        <li className="hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]">
          Cutlery
        </li>
      </ul>
    </div>
  );
};

export default AboutNAV;
