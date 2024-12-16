import React from 'react'
import Image from 'next/image'




const Ceramic = () => {
  return (
    <section>
    <div className='max-w-[1440px] h-[700px]   bg-[#FFFFFF]'>
        <div className='p-7'>
            <h1 className='text-[#2A254B] text-[32px] font-[clash]'>New ceramics</h1>
        </div>
        {/* boxes div */}
        <div className='flex justify-evenly '>
            <div>
                <Image src='/Parent (3).png'
                
                alt={'chair'}
                width={305}
                height={375}/>
                <div className='mt-4'>
                    <p>The Dandy chair</p>
                    <p>£250</p>
                </div>
            </div>
            
            <div>
                <Image
                src={'/Photo (1).png'}
                alt='image'
                
                width={305}
                height={375}/>
                  <div className='mt-4'>
                    <p>Rustic Vase Set</p>
                    <p>£155</p>
                </div>
            </div>
            <div>
                <Image
                src={'/Parent.png'}
                alt='image'
                width={305}
                height={375}/>
                  <div className='mt-4'>
                    <p>The Silky Vase</p>
                    <p>£125</p>
                </div>

            </div>
            <div>
                <Image
                src={'/Parent (1).png'}
                alt='image'
                width={305}
                height={375}
                
                />
                  <div className='mt-4'>
                    <p>The Lucy Lamp</p>
                    <p>£399</p>
                </div>
            </div>
            
        </div>
        <div className='flex justify-center items-center mt-10'>
            <button className='font-[16px] font-[satoshi] text-[#2A254B] bg-[#F9F9F9] px-4 py-3'>View collection</button>
            </div>
         
        

    </div>
    </section>
  )
}

export default Ceramic
