import React from 'react'

const Join = () => {
  return (
    <section>
<div className='max-w-[1440px] h-[400px]  bg-[#F9F9F9] flex flex-col items-center'>
    <div className='w-[1130px] h-[300px] mt-[52px] flex flex-col gap-2 items-center bg-[#FFFFFF]'>
        <h1 className='font-[clash] text-[36px] text-[#2A254B] mt-[52px]'>Join the club and get the benefits</h1>
        <div>
        <p className='w-[470px] h-[48px] font-[satoshi] text-[16px] text-[#2A254B] text-center'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
        </div>
        {/* inpur area */}
        <div className='mt-[25px] w-[472px] h-[56px] flex'>
          <form className='flex ml-[93px]'>
            <input
            type='text'
            placeholder='your@email.com'
            className='bg-[#F9F9F9] p-3 flex justify-center items-center text-center'/>
              <button className='p-2 bg-[#2A254B] text-white w-full md:w-[118px] h-[56px]'>
                  Signup
                </button> 

          </form>

        </div>
    </div>
  </div>
    </section>

  )
}

export default Join