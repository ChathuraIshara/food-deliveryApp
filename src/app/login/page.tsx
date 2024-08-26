import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function loginPage() {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center lg:px-20 xl:px-40'>
      {/*box*/}
      <div className='h-full flex flex-col md:flex-row shadow-2xl rounded-md md:w-full'>
        {/*image continer*/}
        <div className='relative h-1/3 w-full p-4 md:h-[70%] md:w-1/2 lg:w-[60%] 2xl:w-1/2'>
          <Image src='/loginBg.png' alt='' fill className='object-cover'></Image>
        </div>
        {/*form container*/}
        <div className='flex flex-col p-10  gap-8 md:h-[70%] md:w-1/2'>
          <h1 className='font-bold text-xl xl:text-3xl'>Welcome</h1>
          <p>Log in to your account or create a new one using social button.</p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md '>
            <Image src='/google.png' alt='' width={20} height={20} className='object-contain'></Image>
            <span>Sign in with Google</span>
            </button>
            <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md '>
            <Image src='/facebook.png' alt='' width={20} height={20} className='object-contain'></Image>
            <span>Sign in with Facebook</span>
            </button>
            <p className='text-sm'>Have a problem?<Link href='/' className='underline'> Contact us</Link></p>

        </div>


      </div>

    </div>
  )
}

export default loginPage;