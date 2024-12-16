import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="h-96 bg-[#2A254B]">
      <div className="flex space-x-8 pt-10 pl-20">
        <div>
          <h1 className="text-white text-lg  font-Clash Display">Menu</h1>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi]">New arrivals</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi]">Best seller</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi]">Recently Viewed</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi]">Popular this week</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi]">All Products</p>
        </div>
        <div>
          <h1 className="text-white text-lg font-Clash ml-20">
            Catergory
          </h1>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ml-20">Crockery</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ml-20">Furniture</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ml-20">Homeware</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ml-20">Plants pot</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ml-20">Chiar</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ml-20">Crockery</p>
        </div>
        <div className="pl-28">
          <h1 className="text-[#FFFFFF] text-lg font-Clash Display">Our Company</h1>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ">About Us</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ">Vacancies</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ">Contact Us</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ">Privacy</p>
          <p className="text-[#FFFFFF] mt-4 text-[satoshi] ">Return Policy</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash">
            Join our mailing list
          </h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-[#FFFFFF26] w-80 mt-5 h-12 p-5"
          />
          <button className="bg-[#FFFFFF] h-12 w-32 mt-1">
            Sign Up
          </button>

        </div>
      </div>

      <div className=" mx-16 mt-4 border-t-2 border-[#4E4D93] w-11/15 my-2"> 
      
      <p className=" flex text-white mt-1 font-[satoshi] ">Copyright 2022 Avion LTD</p>
      <div className='flex ml-[1093px] gap-2 pr-1 '>
            <Link href={'/'}><FaLinkedin size={20} className="text-white"/></Link>
            <Link href={'/'}><FaFacebookSquare size={20} className="text-white" /></Link>
            <Link href={'/'}><FaInstagram size={20} className="text-white" /></Link>
            <Link href={'/'}><IoLogoSkype size={20} className="text-white" /></Link>
            <Link href={'/'}><FaTwitter size={20} className="text-white"/></Link>
            <Link href={'/'}><FaPinterest size={20} className="text-white" /></Link>
          </div>
      </div>
     
    </div>
  );
};

export default Footer;