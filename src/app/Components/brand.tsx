import React from 'react'
import { TbTruckDelivery} from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsWallet2 } from "react-icons/bs";
import { PiFlowerTulipThin } from "react-icons/pi";






const Brand = () => {
  return (
    <>
    <div className="w-full h-[350px] justify-center items-center mt-10 ">
    
        <div className=" flex justify-center items-center w-[366px] h-[34px] ml-[420px]">
          <h1 className="text-[#2A254B] font-[Clash] text-[24px] leading-[33.6px]">
            What makes our brand different
          </h1>
        </div>



        {/* boxe1 */}
        <div className="flex justify-center">
        <div className="w-[265px] h-[124px] mt-[50px] gap-5px my-9 ">
          <div className="">
            <div>
              <TbTruckDelivery className="text-xl bg-[#FFFFFF]" />
            
            <h1 className="font-[clash] text-[20px] text-[#2A254B] leading-[28px]">
              Next day as standard
            </h1>
            </div>
            <p className="font-[satosh] text-[16px] text-[#2A254B] leading-[24px] pt-3">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          
        </div>

{/* box2 */}
        <div className="w-[265px] h-[124px] mt-[50px] ml-[20px] gap-10px bg-[#FFFFFF] ">
          <div className="w-[209px] h-[148px] gap-12 ">
            <div className="w-24px h-24px">
              <IoCheckmarkCircleOutline className="text-xl bg-[#FFFFFF]" />
            </div>
            <h1 className="font-[clash] text-[20px] text-[#2A254B] leading-[28px] pt-2">
            Made by true artisans
            </h1>
            <p className="font-[satosh] text-[16px] text-[#2A254B] leading-[24px]">
            Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          
        </div>

{/* box3 */}
        <div className="w-[265px] h-[124px] mt-[50px] ml-[20px] gap-10px bg-[#FFFFFF] ">
          <div className="w-[209px] h-[148px] gap-12 ">
           
              <BsWallet2 className="text-xl bg-[#FFFFFF]" />
           
            <h1 className="font-[clash] text-[20px] text-[#2A254B] leading-[28px] pt-2">
            Unbeatable prices
            </h1>
            <p className="font-[satosh] text-[16px] text-[#2A254B] leading-[24px]">
            For our materials and quality you won’t find better prices anywhere
            </p>
          </div>
          
        </div>
{/* box4 */}
        <div className="w-[260px] h-[124px] flex mt-[50px] ml-[20px] gap-10px bg-[#FFFFFF] ">
          <div className="">
            <div className="w-24px h-24px">
              <PiFlowerTulipThin className="text-xl bg-[#FFFFFF]" />
            </div>
            <h1 className="font-[clash] text-[20px] text-[#2A254B] leading-[28px] pt-2">
            Recycled packaging
            </h1>
            <p className="font-[satosh] text-[16px] text-[#2A254B] leading-[24px]">
            We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
          
        </div>
        
        </div>



        
        
        



        
      </div>
    
    </>
  )
}

export default Brand