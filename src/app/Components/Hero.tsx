
import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='max-w-[1440px] h-[600px] flex justify-center ml-16 items-center'>
        {/* left div */}
        <div className='w-[760px] h-[584px]  bg-[#2A254B] ml-15' >
            <div className='w-[513px] h-[187px] flex flex-col ml-10 mt-10 pt-5'>
            <h1 className='font-clash text-[32px] text-[#FFFFFF] leading-[40.8px] '>The furniture brand for the future, with timeless designs</h1>
            <div className='mt-10'>
                <button className=' py-2 px-4 bg-[#F9F9F926] text-[White] font-[santoshi] leading-[24px] text[16px]'>View collection</button>
            </div>


            <div className='mt-20 '>
                <p className='font-[santoshi] text-[white] text-[16px] leading-[27px] mt-20'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</p>
            </div>
            </div>

        </div>
        {/* right div  */}
        <div className='mr-20 sm:'>
            <Image src={'/Parent (3).png'}
            alt='pic'
            width={520}
            height={564}/>


        </div>
    </div>
  )
}
