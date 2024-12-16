import React from "react";
import Image from "next/image";

import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsWallet2 } from "react-icons/bs";
import { PiFlowerTulipThin } from "react-icons/pi";

const About = () => {
  return (
    <main>
      <div>
        <div className="max-w-[1440px] h-[277px] flex justify-evenly items-center">
          <div className="w-[704px] h-[100px]">
            <h1 className="text-[36px] text-[#2A254B] font-[clash]">
              {" "}
              A brand built on the love of craftmanship, quality and outstanding
              customer service
            </h1>
          </div>
          <div>
            <button className="text-[16px] text-[#2A254B] font-[satoshi] bg-[#F9F9F9] py-2 px-4">
              View our products
            </button>
          </div>

          {/* contentdiv*/}
        </div>

        <div className="max-w-[1440px] h-[600px] flex justify-center items-center ml-16">
          {/* left div */}
          <div className="w-[634px] h-[478px]  bg-[#2A254B] ml-15">
            <div className="w-[513px] h-[187px] flex flex-col ml-10 mt-10 pt-5">
              <h1 className="font-clash text-[32px] text-[#FFFFFF] leading-[40.8px] ">
                It started with a small idea
              </h1>
              <p className="font-[satoshi] text-[18px] text-[#FFFFFF]">
                A global brand with local beginnings, our story begain in a
                small studio in South London in early 2014
              </p>

              <div className="mt-40 ">
                <button className=" py-2 px-4 bg-[#F9F9F926] text-[White] font-[santoshi] leading-[24px] text[16px]">
                  View collection
                </button>
              </div>
            </div>
          </div>
          {/* right div  */}
          <div className="">
            <Image
              src={"/Image Block (1).png"}
              alt="pic"
              width={630}
              height={478}
            />
          </div>

          {/* g;obal */}
        </div>

        <div className="max-w-[1440px] h-[603px] bg-[#FFFFFF] flex justify-between items-center">
          {/* left div */}
          <div className="">
            <Image src="/Image (4).png" alt="image" width={720} height={603} />
          </div>

          <div className="w-[720px] h-[603px] flex flex-col  bg-[#F9F9F9]">
            <div className="w-[536px] h-[220px] font-[clash] text-[24px] text-center text-[#2A254B]">
              <h1 className="mt-20 ml-20">
                Our service isnt just personal, its actually hyper personally
                exquisite
              </h1>
            </div>
            <div className="w-[536px] h-[225px] ml-[85px] font-[satoshi] text-[16px]">
              <p className="font-[satoshi] text-[#505977] text-[16px]">
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market.
              </p>
              <p className="mt-4 font-[satoshi] text-[#505977] text-[16px]">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
              </p>
            </div>
            <div className="w-[150px] h-[56px] mt-[50px] ml-[85px]">
              <button className="font-[satoshi] text-[16px] text-[#2A254B] bg-[#FFFFFF] py-2 px-3">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        {/* section */}

        <div className=" w-[1440px] h-[34px] mt-20">
          <div className="text-center justify-center items-center">
            <h1 className=" text-[#2A254B] font-[Clash] text-[24px] leading-[33.6px]">
              What makes our brand different
            </h1>
          </div>
        </div>

        {/* boxe1 */}
        <div className="flex justify-center">
          <div className="w-[265px] h-[124px] mt-[50px] gap-5px my-9 bg-[#F9F9F9]">
            <div className="">
              <div>
                <TbTruckDelivery className="text-xl bg-[#F9F9F9]" />

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
          <div className="w-[265px] h-[124px] mt-[50px] ml-[20px] gap-10px bg-[#F9F9F9] ">
            <div className="w-[209px] h-[148px] gap-12 ">
              <div className="w-24px h-24px">
                <IoCheckmarkCircleOutline className="text-xl bg-[#F9F9F9]" />
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
          <div className="w-[265px] h-[124px] mt-[50px] ml-[20px] gap-10px bg-[#F9F9F9] ">
            <div className="w-[209px] h-[148px] gap-12 ">
              <BsWallet2 className="text-xl bg-[#F9F9F9]" />

              <h1 className="font-[clash] text-[20px] text-[#2A254B] leading-[28px] pt-2">
                Unbeatable prices
              </h1>
              <p className="font-[satosh] text-[16px] text-[#2A254B] leading-[24px]">
                For our materials and quality you won’t find better prices
                anywhere
              </p>
            </div>
          </div>
          {/* box4 */}
          <div className="w-[260px] h-[124px] flex mt-[50px] ml-[20px] gap-10px bg-[#F9F9F9] ">
            <div className="">
              <div className="w-24px h-24px">
                <PiFlowerTulipThin className="text-xl bg-[#F9F9F9]" />
              </div>
              <h1 className="font-[clash] text-[20px] text-[#2A254B] leading-[28px] pt-2">
                Recycled packaging
              </h1>
              <p className="font-[satosh] text-[16px] text-[#2A254B] leading-[24px]">
                We use 100% recycled to ensure our footprint is more manageable
              </p>
            </div>
            {/* gffffffffffffffffffffffffffff */}
          </div>

          {/* section 2 */}
        </div>
        <div className="max-w-[1440px] h-[400px]  bg-[#F9F9F9] flex flex-col items-center">
          <div className="w-[1130px] h-[300px] mt-[52px] flex flex-col gap-2 items-center bg-[#FFFFFF]">
            <h1 className="font-[clash] text-[36px] text-[#2A254B] mt-[52px]">
              Join the club and get the benefits
            </h1>
            <div>
              <p className="w-[470px] h-[48px] font-[satoshi] text-[16px] text-[#2A254B] text-center">
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more
              </p>
            </div>
            {/* inpur area */}
            <div className="mt-[25px] w-[472px] h-[56px] flex">
              <form className="flex ml-[93px]">
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="bg-[#F9F9F9] p-3 flex justify-center items-center text-center"
                />
                <button className="p-2 bg-[#2A254B] text-white w-full md:w-[118px] h-[56px]">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
