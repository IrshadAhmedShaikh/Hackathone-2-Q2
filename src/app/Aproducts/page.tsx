import React from 'react'
import Image from 'next/image'
import { IoMdArrowDropdown } from "react-icons/io";


const Aproducts = () => {
  return (
    <section className='max-w-[1440px] h-auto flex justify-center items-center'>
    <div className='max-w-[1440px] h-auto flex flex-col justify-center items-center'>
        <div>
            <Image 
            src={'/Frame 143.png'}
            alt='image'
            width={1440}
            height={209}/>
        </div>
        <div className='w-[1440px] h-[64px] flex justify-around items-center bg-[#FFFFFF] font-[satoshi] text-[16px]'>
            <div>Category </div>
            <IoMdArrowDropdown />
            <div>Product type</div>
            <IoMdArrowDropdown />
            <div>Price</div>
            <IoMdArrowDropdown />
            <div>Brand</div>
            <IoMdArrowDropdown />
            <div>Sorting by:</div>
            
            <div>Date added</div>
            <IoMdArrowDropdown/>

        </div>
             {/* section 2 */}
             

 <div className='grid grid-cols-4 ml-20 gap-3 '>
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
       

         
 <div className='grid grid-cols-4 ml-20 gap-3 mt-10 '>
            <div>
                <Image src={'/Parent (4).png'}
                alt='chair'
                width={305}
                height={375}/>
                <div className='mt-4'>
                    <p>The Dandy chair</p>
                    <p>£250</p>
                </div>
            </div>
            
            <div>
                <Image
                src={'/Photo (2).png'}
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
                src={'/Parent (5).png'}
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
                src={'/Parent (6).png'}
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
       

            <div className='grid grid-cols-4 ml-20 gap-3 mt-10 '>
            <div>
                <Image src={'/Parent (3).png'}
                alt='chair'
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
             <div className='w-[1440px] h-auto mt-6 flex justify-evenly items-center mb-10'>
            <button className='font-[16px] font-[satoshi] text-[#2A254B] bg-[#F9F9F9] px-4 py-3'>View collection</button>
            </div>
        </div>
       
         

        

    </div>
    </section>
  )
}


export default Aproducts