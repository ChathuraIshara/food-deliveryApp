import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CartIcon() {
  return (
    <Link href='/cart' className='flex items-center justify-center gap-4'>
        <div className='relative w-8 h-8'>
            <Image src='/cart.png' alt="" fill></Image>
        </div>
        <span>Cart (3)</span>
    </Link>
  )
}

export default CartIcon;