import React from 'react'

import Image from 'next/image'


const Global = () => {
  return (
    <div className='max-w-[1440px] h-[603px] bg-[#FFFFFF] flex justify-between items-center'>
        {/* right div */}
        <div className='w-[536px] h-[full] flex flex-col mt-[72px] ml-[84px]'>
            <div className='w-[514px] h-[20px] font-[clash] text-[24px] text-center text-[#2A254B]'>
                <h1>From a studio in London to a global brand with
                over 400 outlets</h1>
            </div>
            <div className='w-[536px] h-[px] mt-[80px] font-[satoshi] text-[16px]'>
                <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                <p className='mt-8'> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

            </div>
            <div className='w-[150px] h-[56px] mt-[180px] '>
                <button className='font-[satoshi] text-[16px] text-[#2A254B] bg-[#F9F9F9] py-2 px-3'>Get in touch</button>
            </div>

        </div>
        {/* left div */}
        <div className=''>
            <Image src={'/Image (3).png'}
            alt='image'
            width={720}
            height={603}/>
        </div>
    </div>
  )
}

export default Global