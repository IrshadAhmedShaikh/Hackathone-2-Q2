import React from 'react'
import Image from 'next/image'

const Pproducts = () => {
  return (
    <>
    <section>
    <div className='max-w-[1440px]  h-[650px]  bg-[#FFFFFF]'>
        <div className='p-10 '>
            <h1 className='text-[#2A254B] text-[32px] font-[clash]'>Our popular products</h1>
        </div>
        {/* boxes div */}
        <div className='flex justify-around items-center gap-2'>
            <div>
                <Image src={'/large.jpeg'}
                alt='sofa'
                width={573}
                height={375}/>
                <div className='mt-4'>
                    <p>The Poplar suede sofa</p>
                    <p>£980</p>
                </div>
            </div>
            
            <div>
                <Image
                src={'/Parent (3).png'}
                alt='image'
                
                width={305}
                height={375}/>
                  <div className='mt-4'>
                    <p>The Dandy chair</p>
                    <p>£250</p>
                </div>
            </div>
            <div>
                <Image
                src={'/Parent (2).png'}
                alt='image'
                width={305}
                height={375}/>
                  <div className='mt-4'>
                    <p>The Dandy chair</p>
                    <p>£250</p>
                </div>

            </div>
           
            
        </div>
        <div className='flex justify-center items-center mt-10'>
            <button className='font-[16px] font-[satoshi] text-[#2A254B] bg-[#F9F9F9] px-4 py-3'>View collection</button>
            </div>
         
        

    </div>
    </section>
    </>
  )
}

export default Pproducts
