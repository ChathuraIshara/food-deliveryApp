import { pizzas } from '@/app/data';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Category() {
  return (
    <div className='flex flex-wrap'>
     {pizzas.map((item)=>(
      <Link className='w-full md:w-1/2 lg:w-1/3 border-r-2 border-b-2 border-red-500 h-[60vh] p-4 group odd:bg-fuchsia-50' href={`/product/${item.id}`}>
        {/*image container*/}
        {item.img && 
        <div className='relative h-[80%]'>
          <Image src={item.img} className='object-contain' alt='' fill></Image>
        </div>
        }
        {/*text container*/}
        <div className='flex flex-row items-center justify-between text-red-500 font-bold'>
          <h1 className='text-2xl p-2 uppercase'>{item.title}</h1>
          <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
          <button className='bg-red-500 p-2 text-white rounded-md uppercase hidden group-hover:block'>Add to cart</button>
        </div>
      </Link>
     ))}
    </div>
  )
}

export default Category;