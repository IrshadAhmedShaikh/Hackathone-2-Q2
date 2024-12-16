import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';




const Header = () => {
  return (
    <div className='max-w-[1440px] h-[132px] p-2 mt-4 sm:flex flex-col md:block'>
        <div className='w-full flex justify-between items-center  bg-[#FFFFFF] border-b-[0.5px]'>
          
            
        <CiSearch className='text-3xl' />
        
        <h1 className='font-[clash] text-[24px] text-[#22202E] leading-[29.54px] border-b-[0.5px] mt-2'>Avion</h1>
        
        <div className='flex gap-3 text-2xl'>

        <Link href='/Cart'>
  <MdOutlineShoppingCart  />
  </Link>
  
  <CgProfile />
  </div>


  </div>
  <div className='sm:flex flex-col md:block'>
<ul className='flex justify-center items-center gap-8 mt-4 '>
    <li className='hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]'>Plant pots</li>
    <li className='hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]'>Ceramics</li>
    <li className='hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]'>Tables</li>
    <li className='hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]'>Chairs</li>
    <li className='hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]'>Crockery</li>
    <Link href={"/Aproducts"}>
    <li className='hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]'>All Products</li>
    </Link>
    <Link href={"/About"}>
    <li className='hover:cursor-pointer hover:underline underline-offset-2 text-[16px] font-[santoshi] text-[#726E8D]'>Services</li>
    </Link>

</ul>
</div>
  


            
      
    </div>
  )
}

export default Header
