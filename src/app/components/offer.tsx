import React from 'react'
import Image from 'next/image';
import CountDown from './countdown';

function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:bg-[url('/offerBg.png')] md:h-[90vh]">
      {/*text container*/}
      <div className='flex-1 flex flex-col justify-center items-center gap-8 p-6'>
        <h1 className='text-white uppercase text-5xl lg:text-6xl text-center font-bold xl:w-1/2 '>Delicious Burger & french fry</h1>
        <p className='text-white text-center xl:text-2xl xl:w-1/2'>progressively simplify effective e-toilers and process-centric methods
           of empowerment.Quickly ponifiticate parallel.</p>
        <CountDown></CountDown>
        <button className='bg-red-500 text-white px-6 py-3 rounded-md'>Order Now</button>

      </div>
      {/*image container*/}
      <div className='flex-1 relative md:h-full'>
        <Image src='/offerProduct.png' alt='' fill className='object-contain'></Image>

      </div>
    </div>
  )
}

export default Offer;