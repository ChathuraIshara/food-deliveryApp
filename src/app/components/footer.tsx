import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div className='h-12 p-4 flex items-center justify-between text-red-500 border-t-2 border-red-500 lg:px-20 xl:px-40 md:h-24'>
      <Link className='text-xl md:font-bold md:text-center' href='/'>MASSIMO</Link>
      <div>
        <p>©All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;