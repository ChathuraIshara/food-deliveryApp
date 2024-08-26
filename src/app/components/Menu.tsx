"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import CartIcon from './cartIcon';

function Menu() {
    const [open,setOpen]=useState(false);

    const links=[
        {id:1,title:'Homepage',url:'/'},
        {id:2,title:'Menu',url:'/menu'},
        {id:3,title:'Working Hours',url:'/'},
        {id:4,title:'Contact',url:'/'},

    ]; 

    const user=true;



  return (
    <div>
        <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
        {open && <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">

            {links.map((item)=>
            (
                <Link href={item.url} key={item.id} onClick={()=>{setOpen(false)}}>{item.title}</Link>
            ))}
            {!user ?
             <Link href='/login' onClick={()=>{setOpen(false)}}>Login</Link >
             :<Link href='/orders' onClick={()=>{setOpen(false)}}>Orders</Link>}
             <Link href='/cart' onClick={()=>{setOpen(false)}}>
             <CartIcon></CartIcon>
             </Link>
        </div>}
       
       
    </div>
  )
}

export default Menu