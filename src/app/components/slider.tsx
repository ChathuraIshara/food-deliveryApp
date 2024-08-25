'use client'
import React from 'react'
import Image from 'next/image';
import { useState,useEffect } from 'react';

function Slider() {
    const [currentSlide,setCurrentSlide]=useState(0);
    const data=[
        {
            id:1,
            title:'always fresh & always crispy & always hot',
            image:'/slide1.png'
        },
        {
            id:2,
            title:'we deliver your order whatever your are in NY',
            image:'/slide2.png'
        },
        {
            id:3,
            title:'the best pizza to share with your family',
            image:'/slide3.jpg'
        }
    ];

    // useEffect(()=>
    // {
    //     const interval=setInterval(()=>
    //     {
    //         setCurrentSlide((prev)=>prev==data.length-1?0:prev+1);
    //     },2000)
    //     return ()=>clearInterval(interval);

    // },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
        {/*text slide*/}
        <div className='h-1/2 flex flex-col md:p-10 items-center justify-center text-red-500 font-bold gap-6 lg:h-full lg:w-1/2'>
            <h1 className='text-5xl uppercase text-center p-4 lg:text-6xl xl:text-7xl'>{data[currentSlide].title}</h1>
            <button className='bg-red-500 text-white py-4 px-8'>Order now</button>

        </div>
        {/*imageslide*/}
        <div className='w-full h-1/2  relative lg:h-full lg:w-1/2'> 
            <Image className='object-cover' src={data[currentSlide].image} alt='slider image' fill></Image>

        </div>
    </div>
  )
}

export default Slider;