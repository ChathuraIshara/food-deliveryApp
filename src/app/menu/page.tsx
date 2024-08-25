import React from 'react'
import { menu } from '../data';
import Category from './[category]/page';
import Link from 'next/link';

function Menu() {
  return (
    <div className='p-4 lg:px-20  h-[calc(100vh-6rem)] md:h-[calc(100ch-9rem)] flex flex-col md:flex-row my-8'>
      {menu.map((Category)=>(
        <Link href={`/menu/${Category.slug}`} key={Category.id} className='w-full h-1/3 md:h-1/2 bg-cover p-8' style={{backgroundImage:`url(${Category.img})`}}>
          <div className={`text-${Category.color} w-1/2`}>
            <h1 className='font-bold text-3xl uppercase'>{Category.title}</h1>
            <p className='text-sm my-8'>{Category.desc}</p>
            <button className={`hidden 2xl:block bg-${Category.color} text-${Category.color==="black"?"white":"red-500"} py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
     
    </div>
  )
}

export default Menu;