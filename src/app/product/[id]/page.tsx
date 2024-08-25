import React from 'react';
import Image from 'next/image';
import { singleProduct } from '@/app/data';
import Price from '@/app/components/Price';

function productPage() {
  return (
    <div className='p-4 lg:px-20 h-screen  flex flex-col md:flex-row items-center justify-around md:gap-8 md:items-center'>
      {/*image container*/}
      <div className='relative w-full h-1/2 md:h-[70%]'>
        {singleProduct.img &&  <Image src={singleProduct.img} alt='' fill className='object-contain'></Image>}
       
      </div>
      {/*text container*/}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
      <h1 className='text-red-500 text-3xl font-bold xl:text-5xl'>{singleProduct.title}</h1>
      <p className='text-red-500'>{singleProduct.desc}</p>
      <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} ></Price>
      </div>
      
    </div>
  )
}

export default productPage;